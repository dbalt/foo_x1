import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {SourceData} from "../tools/data";
import {proc_visitImmTree} from "../processing";
import {Tps} from "../srcdata";
import {proc_createNode, proc_removeNode} from "./editor_int";


const s0 = {border: '1px solid gray', display: 'inline-block', margin: '6px', padding: '2px',}

const s2 = {fontWeight: 'bold',}
const s3 = {
    cursor: 'pointer',
    margin: '6px',
    padding: '6px',
    fontWeight: 'bold',
    fontSize: 'small',
    border: '1px solid gray',
    display: 'inline-block',
}

const s10 = {border: '1px solid lightgray', margin: '4px', padding: '2px', cursor: 'pointer', display: 'inline-block',}
const s10x = {...s10} //Невыбранная
const s10y = {...s10, fontWeight: 'bold', backgroundColor: 'yellow',} //Выбранная

const EditStrComponent = make_cmp().setView(props => {
    const ctx = props.ctx
    return (<div style={s0}>
        <div style={s2}> {ctx.field} </div>
        <div style={s3} onClick={ctx.changeOp}> {ctx.opDirection} </div>
        <div>
            {ctx.items.map(it => (<div
                style={ctx.hasVal(it) ? s10y : s10x}
                key={it}
                onClick={ctx.genClickHandler(it)}
            >
                {it}
            </div>))}
        </div>
    </div>)
}).setStp((state, props) => {
    const {treePath, item} = props
    const tree = state.getIn(treePath, ImmJS.fromJS({}))
    const sourceData = new SourceData(state)
    const ctx = fn_getContext(treePath, tree, sourceData, item)
    return {ctx}
}).make()


const fn_getContext = (treePath, tree, sourceData, itm) => {
    const field = itm.get('name')
    const hasNode = itm.get('hasNode')
    const node = itm.get('node', ImmJS.fromJS({}))
    const op = node.get('op', '')
    const val = node.get('val', '')
    const is_lst = ImmJS.List.isList(val)
    const nodePath = node.get('path', ImmJS.fromJS([])).toJS()

    const changeOp = e => {
        if (!hasNode) return

        let newOp = ''
        if (op === '=') newOp = '!='
        if (op === '!=') newOp = '='
        if (op === 'in') newOp = 'not in'
        if (op === 'not in') newOp = 'in'

        act('change_op')
            .set([...treePath, ...nodePath, 'op'], newOp)
            .set(['zzz', 'inputValRecalcFlag'], true)
            .dispatch()
    }

    const opDirection = ['=', 'in'].includes(op) ? 'direct' : 'invert'

    const items = sourceData.hasField(field) ? sourceData.field(field).refList() : ImmJS.fromJS([])

    const hasVal = it => is_lst ? val.includes(it) : val === it

    const genClickHandler = it => e => {
        const has_val = hasVal(it)

        if (has_val && !is_lst) { //Было одно значение, и при клике мы его убираем
            /* нужно удалить ноду */
            proc_removeNode(treePath, tree, nodePath)
            return
        }

        if (!hasNode) { //не было ни одного - сейчас добавилось одно.
            /* создаём ноду */
            proc_createNode(treePath, tree, {
                tp: 'unit',
                field,
                op: '=',
                val: it,
            })
            return
        }

        if (hasNode && !is_lst) {
            /* значение превратить в список */
            const newOp = op === '=' ? 'in' : 'not in'
            const newVal = ImmJS.fromJS([val, it])
            act('change_node_val')
                .set([...treePath, ...nodePath, 'val'], newVal)
                .set([...treePath, ...nodePath, 'op'], newOp)
                .set(['zzz', 'inputValRecalcFlag'], true)
                .dispatch()
            return
        }

        const valsCount = val.size
        if (valsCount === 2 && has_val) {
            /* список превратить в значение */
            const newOp = op === 'in' ? '=' : '!='
            act('change_node_val')
                .set([...treePath, ...nodePath, 'val'], it)
                .set([...treePath, ...nodePath, 'op'], newOp)
                .set(['zzz', 'inputValRecalcFlag'], true)
                .dispatch()
            return
        }

        /* Все оставшиеся кейсы - это список в список */
        const newVal = has_val ? val.remove(val.findIndex(x => x === it)) : val.push(it)
        act('change_node_val')
            .set([...treePath, ...nodePath, 'val'], newVal)
            .set(['zzz', 'inputValRecalcFlag'], true)
            .dispatch()
    }

    return {field, changeOp, opDirection, items, hasVal, genClickHandler}
}

// const EditStr = props => {
//     return <div style={s0}>
//         str # name : {props.item.get('name')} # hasNode : {props.item.get('hasNode') ? 'YES' : 'NO'}
//     </div>
// }

export default EditStrComponent