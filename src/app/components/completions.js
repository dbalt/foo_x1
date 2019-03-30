import React from 'react'
import {make_cmp, act, currentState} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {Tps} from "../srcdata";

import {proc_visitTree, proc_visitImmTree} from "../processing";
import {SourceData} from "../tools/data";

const fn_getCompletions = (state, treePath) => {
    const res = []
    const tree = state.getIn(treePath)
    const sd = new SourceData(state)

    let x = 10 / 0

    const visitor = node => {
        if (node.get('tp') !== 'unit') return
        const fieldName = node.get('field')
        if (!sd.hasField(fieldName)) return
        const fd = sd.field(fieldName)
        if (fd.type !== Tps.str) return
        const val = node.get('val')
        const is_lst = ImmJS.List.isList(val)

        const fn = (path, v) => ({
            current: v,
            path,
            variants: fd.refList().filter(it => it.startsWith(v)),
        })

        if (is_lst) {
            for (let idx = 0; idx < val.size; idx++) {
                const v = val.get(idx)
                if (fd.isComplete(v)) continue
                if (!fd.isValid(v)) continue
                res.push(fn([...treePath, ...node.get('path').toJS(), 'val', idx], v))
            }
        }
        else {
            if (fd.isComplete(val)) return
            if (!fd.isValid(val)) return
            res.push(fn([...treePath, ...node.get('path').toJS(), 'val'], val))
        }
    }

    try {
        proc_visitImmTree(tree, visitor)
    }
    catch (e) {
        res.length = 0
    }
    return res
}


// const fn_genClickHandler = (schema, fieldVals, dataset, strPath, fn_getTree) => completion => item => e => {
//     /* Нужно в дереве заменить item с деталями completion */
//     const tree = fn_getTree()
//
//     const visitor = node => {
//         if (node.tp != 'unit') return
//         if (completion.get('tp') == 'field_val') {
//             if (node.field.name == completion.get('fld') && node.val.value == completion.get('current')) {
//                 node.val.value = item
//                 node.val.complete = true
//             }
//         }
//     }
//
//     proc_visitTree(tree, visitor)
//
//     const s = fn_treeToStr(tree)
//     proc_queryStringWasChanged(s, schema, fieldVals, dataset, strPath)
// }


const containerStyle = {
    display: 'inline-block',
    margin: '5px',
    padding: '5px',
    border: '1px solid gray',

}

const itemStyle = {
    border: '1px solid gray',
    padding: '5px',
    fontWeight: "bold",
    margin: '2px',
    cursor: 'pointer',

}

const Completion = props => {
    const c = props.c

    const clickHandler = v => e => {
        act('auto_completion').set(c.path, v).set(['zzz', 'inputValRecalcFlag'], true).dispatch()
    }

    const items = c.variants.map(it => {
        return <div
            style={itemStyle}
            id={it}
            onClick={clickHandler(it)}>
            {it}
        </div>
    })

    return (<div style={containerStyle}>
        <div> Completion</div>
        <div> current val : {c.current} </div>
        <div>
            {items}
        </div>
    </div>)
}
//
// const ValueCompletion = props => {
//     const c = props.c
//
//     const items = c.get('variants').map(it => <div style={itemStyle} id={it}
//                                                    onClick={props.clickHandlerGen(it)}> {it} </div>)
//
//
//     return (<div style={containerStyle}>
//         <div> Value completion</div>
//         <div> Field : {c.get('fld')} </div>
//         <div> current val : {c.get('current')} </div>
//         <div>
//             {items}
//         </div>
//
//     </div>)
// }

const CompletionsListX = make_cmp()

CompletionsListX.stp = (state, props) => {
    const treePath = ['calc', 'tree']
    console.log('try to recalc')
    const completions = fn_getCompletions(state, treePath)

    return {
        ...props,
        completions,
    }
}

CompletionsListX.view = props => {

    let k = 0
    const fn_id = () => k++

    return <div>
        {props.completions.map(it => (<Completion key={fn_id()} c={it}/>))}
    </div>
}


export default CompletionsListX.make()