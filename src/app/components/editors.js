import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {SourceData} from "../tools/data";
import {proc_visitImmTree} from "../processing";
import {Tps} from "../srcdata";
import EditInt from './editor_int'
import EditStr from './editor_str'

const fn_getContext = (state, treePath) => {
    // console.log('Editors context')
    const tree = state.getIn(treePath, ImmJS.fromJS({}))
    const sd = new SourceData(state)

    const fieldSet = new Set()
    let ok = true
    const nodes = {}

    const visitor = node => {
        if (!ok) return
        const tp = node.get('tp')
        if (tp == 'logical_operation') {
            const opr = node.get('opr')
            if (opr === 'or') ok = false // можем обрабатывать только and's
            return
        }

        if (tp == 'unit') {
            const fieldName = node.get('field')
            const f = sd.field(fieldName)
            if (f == null) {
                ok = false //Несуществующее поле
                return
            }

            if (fieldSet.has(fieldName)) {
                ok = false // Уже есть юнит с таким полем
                return
            }
            fieldSet.add(fieldName)

            const val = node.get('val')
            const is_lst = ImmJS.List.isList(val)
            if (f.type === Tps.int && is_lst) {
                ok = false // Для целочисленных не можем оперировать списком
                return
            }

            const op = node.get('op')
            const op_need_list = (op == 'not in' || op == 'in')
            if (is_lst != op_need_list) {
                ok = false //Оператор подразумевает список, а унас одно значение. или наоборот
                return
            }


            const fn_val_ok = v => {
                if (f.type === Tps.str) return f.isComplete(v) && f.isValid(v)
                if (f.type === Tps.int) return !isNaN(v)
                return false
            }
            if (is_lst) {
                const all_vals_ok = val.reduce((acc, item) => acc = acc && fn_val_ok(item), true)
                if (!all_vals_ok) {
                    ok = false //какие то из значений списка - хуйня
                    return
                }
            } else {
                if (!fn_val_ok(val)) {
                    ok = false //Значение - хуета
                    return
                }
            }
            // Если мы дошли досюда - то типа всё ок
            nodes[fieldName] = node
        }
    }

    try {
        proc_visitImmTree(tree, visitor)
    } catch (e) {
        ok = false
        nodes.clear()
    }

    return {
        ok,
        nodes: ImmJS.fromJS(nodes),
    }

}


const Container = make_cmp()
Container.view = props => {
    // console.log('container')
    if (!props.ok) return <div> Tree structure cannot be edited through gui </div>

    const sx1 = {display: 'flex', flexWrap: 'wrap',}

    let k = 0
    const fn_key = () => k++

    const fn_cmp = it => {
        if (it.get('tp') === Tps.str) return (<EditStr treePath={props.treePath} item={it} id={fn_key()}/>)
        if (it.get('tp') === Tps.int) return (<EditInt treePath={props.treePath} item={it} id={fn_key()}/>)
        return null
    }

    const items = props.items.map(fn_cmp)

    return <div style={sx1}> {items} </div>
}
Container.stp = (state, props) => {
    const {ok, nodes} = fn_getContext(state, props.treePath)
    if (!ok) return {ok}
    // console.log('calc')
    const sd = new SourceData(state)
    const items = sd.fields().filter(it => it.type === Tps.int || it.type === Tps.str).map(it => {
        const hasNode = nodes.has(it.name)

        const res = {
            name: it.name,
            hasNode,
            tp: it.type,
            node: hasNode ? nodes.get(it.name) : {},
            variants: it.variants,
        }
        return ImmJS.fromJS(res)
    })

    return {ok, items, treePath: props.treePath,}
}
const ContainerC = Container.make()
ContainerC.propTypes = {
    treePath: pt.array.isRequired,
}
export default ContainerC