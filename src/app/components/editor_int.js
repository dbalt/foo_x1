import React from 'react'
import {make_cmp, act, pipe, applyFn} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {SourceData} from "../tools/data";
import {proc_visitImmTree} from "../processing";
import {Tps} from "../srcdata";

const intOps = ['>', '>=', '<=', '<', '=', '!=']


const ComponentX = make_cmp().setView(props => {

    const s1 = {display: 'inline-block', margin: '2px', padding: '2px'}
    const s0 = {border: '1px solid gray', display: 'inline-block', margin: '6px', padding: '2px', maxHeight: '31.8px',}
    const si = {width: '50px',}
    const s1f = {...s1, paddingLeft: '10px', paddingRight: '10px', fontSize: 'large',}

    const ctx = props.ctx
    return (<div style={s0}>
        <div style={s1f}>{ctx.field}</div>
        <div style={s1}>
            <select value={ctx.op} onChange={ctx.changeOp}>
                {ctx.opVariants.map(it => <option value={it} key={it}>{it}</option>)}
            </select>
        </div>
        <div style={s1}>
            <input value={ctx.val} onChange={ctx.changeVal} style={si}/>
        </div>
    </div>)
}).setStp((state, props) => {
    return {
        ctx: fn_getContext(props.treePath, state.getIn(props.treePath), props.item),
    }
}).make()


const fn_recalcPathes = (tree, rootPath) => {
    const fns = []

    const proc = (node, path, locPath) => {
        // console.log('#', path, locPath)
        fns.push(t => t.setIn([...locPath, 'path'], ImmJS.fromJS(path)))
        if (node.get('tp') === 'logical_operation') {
            proc(node.get('left'), [...path, 'left'], [...locPath, 'left'])
            proc(node.get('right'), [...path, 'right'], [...locPath, 'right'])
        }
    }

    proc(tree, ImmJS.List.isList(rootPath) ? rootPath.toJS() : rootPath, [])

    return pipe(tree, fns)
}

const proc_createNode = (treePath, tree, node) => {
    if (!tree.has('tp')) {
        /* Дерево у нас пустое, помещаем ноду тупо в корень */
        node.path = []
        act('rearrange_tree')
            .set(treePath, node)
            .set(['zzz', 'inputValRecalcFlag'], true)
            .dispatch()
        return
    }

    node.path = ['right']


    const expr = ImmJS.fromJS({
        'path': [],
        'tp': 'logical_operation',
        'left': fn_recalcPathes(tree, ['left']),
        'opr': 'and',
        'right': node,
    })

    act('rearrange_tree')
        .set(treePath, expr)
        .set(['zzz', 'inputValRecalcFlag'], true)
        .dispatch()
}


const proc_removeNode = (treePath, tree, nodePath) => {
    if (nodePath.length === 0) {
        act('clear_tree')
            .del(treePath)
            .set(['zzz', 'inputValRecalcFlag'], true)
            .dispatch()
        return
    }


    /* size > 1 */
    const pathDeep = nodePath.length
    const nodeAppendToPath = nodePath.slice(0, pathDeep - 1)
    const node = tree.getIn([...nodeAppendToPath, (nodePath[pathDeep - 1] === 'left' ? 'right' : 'left')])
    act('tree_remove_node')
        .set([...treePath, ...nodeAppendToPath], fn_recalcPathes(node, nodeAppendToPath))
        .set(['zzz', 'inputValRecalcFlag'], true)
        .dispatch()
}


const fn_getContext = (treePath, tree, item) => {
    // item is immutable shit

    const field = item.get('name')
    const op = item.getIn(['node', 'op'], '=')
    const opVariants = intOps
    const hasNode = item.get('hasNode')

    const changeOp = e => {
        const newOp = e.target.value
        if (newOp == op) return

        /* Если нода была и есть - то тупо меняем и всё */
        if (hasNode) {
            act('change_op')
                .set([...treePath, ...item.getIn(['node', 'path']).toJS(), 'op'], newOp)
                .set(['zzz', 'inputValRecalcFlag'], true)
                .dispatch()
            return
        }

        /* Если ноды не было, то создадим её и поместим сука куда нить */
        const node = {
            'tp': 'unit',
            'field': field,
            'op': newOp,
            'val': '0',
        }

        proc_createNode(treePath, tree, node)
    }


    const val = hasNode ? item.getIn(['node', 'val'], '') : ''
    const changeVal = e => {
        const newVal = e.target.value
        if (val !== '' && newVal !== '') {
            /*  Тупо обновим в ноде значение */
            act('change_val')
                .set([...treePath, ...item.getIn(['node', 'path']).toJS(), 'val'], newVal)
                .set(['zzz', 'inputValRecalcFlag'], true)
                .dispatch()
            return
        }

        if (val !== '' && newVal === '') {
            /* нам нужно грохнуть ноду */
            proc_removeNode(treePath, tree, item.getIn(['node', 'path']).toJS())
        }

        if (val === '' && newVal !== '') {
            /* Нам нужно создать ноду */
            proc_createNode(treePath, tree, {
                'tp': 'unit',
                'field': field,
                'op': op,
                'val': newVal,
            })
        }
    }

    return {field, op, changeOp, opVariants, val, changeVal}
}


// const Select = props => {
//     return <Select
//         options={intOps}
//     />
// }
//
//
// const EditInt = props => {
//     return <div>
//         int # name : {props.item.get('name')} # hasNode : {props.item.get('hasNode') ? 'YES' : 'NO'}
//     </div>
// }

ComponentX.propTypes = {
    treePath: pt.array.isRequired,
    item: immpt.map.isRequired,
}

export default ComponentX
export {proc_createNode, proc_removeNode}