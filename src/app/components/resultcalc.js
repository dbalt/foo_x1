import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import ResultSetView from './resultsetview'
import {SourceData} from "../tools/data";
import {Tps} from "../srcdata";


const ResView = props => {
    console.log('debug')
    return (<ResultSetView items={props.items}/>)
}

const fn_sourceItems = (state, path) => state.getIn(path, ImmJS.fromJS([]))

const fn_filteredItems = (state, path, treePath) => {
    const dataset = state.getIn(path, ImmJS.fromJS([]))
    // return dataset
    const tree = state.getIn(treePath)
    const sd = new SourceData(state)

    const fn_calculateFilterFunction = tree => {
        const fn_calcNodeFunction = (node) => {
            const tp = node.get('tp')
            if (tp === 'logical_operation') {
                const opr = node.get('opr')
                const left = node.get('left')
                const right = node.get('right')
                if (opr === 'and') {
                    return ( it => fn_calcNodeFunction(left)(it) && fn_calcNodeFunction(right)(it))
                }

                if (opr === 'or') {
                    return (it => fn_calcNodeFunction(left)(it) || fn_calcNodeFunction(right)(it))
                }
            }

            if (tp === 'unit') {
                const op = node.get('op')
                const fieldName = node.get('field')
                const val = node.get('val')
                const is_lst = ImmJS.List.isList(val)

                const f = sd.field(fieldName)
                if (f == null) return it => false

                if (op == '=') return it => !is_lst && it.get(fieldName) == val
                if (op == '!=') return it => !is_lst && it.get(fieldName) != val

                if (op == 'in') return it => is_lst && val.includes(it.get(fieldName))
                if (op == 'not in') return it => is_lst && !val.includes(it.get(fieldName))

                if (f.type == Tps.int) {

                    if (isNaN(val)) return it => false
                    if (op == '>') return it => it.get(fieldName) > val
                    if (op == '>=') return it => it.get(fieldName) >= val
                    if (op == '<') return it => it.get(fieldName) < val
                    if (op == '<=') return it => it.get(fieldName) <= val
                }

                //TODO : cover all other cases
            }

            return it => false
        }

        try {
            return fn_calcNodeFunction(tree)
        }
        catch (e) {
            return it => false
        }
    }
    const fn = fn_calculateFilterFunction(tree)
    return dataset.filter(fn)

}


const ResultSetSource = make_cmp().setView(ResView).setStp((s, p) => {
    return {items: fn_sourceItems(s, p.path)}
}).make()
ResultSetSource.propTypes = {
    path: pt.array.isRequired,
}

const ResultSetFiltered = make_cmp().setView(ResView).setStp((s, p) => {
    return {items: fn_filteredItems(s, p.path, p.treePath)}
}).make()
ResultSetFiltered.propTypes = {
    path: pt.array.isRequired,
    treePath: pt.array.isRequired,
}


export {ResultSetSource, ResultSetFiltered}


