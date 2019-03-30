import React from 'react'
import {make_cmp, act, currentState} from "../../boilerplate";
import pt from 'prop-types'
import {SourceData} from "../tools/data";
import immpt from 'react-immutable-proptypes'
import {proc_queryStringWasChanged} from "../processing";
import Imm from 'immutable'
import {Tps} from "../srcdata";

import InputComponent from '../tools/input'

const proc_recalcString = (path, treePath) => {

    console.log('recalc string')

    const s = currentState()
    if (!s.hasIn(treePath)) return

    const sd = new SourceData(s)
    const tree = s.getIn(treePath)

    let lastOpIsAnd = false

    const fn_str = node => {
        const tp = node.get('tp')

        if (tp === 'logical_operation') {
            const opr = node.get('opr')
            const needBrackets = opr === 'or' && lastOpIsAnd
            if (opr === 'or') lastOpIsAnd = false
            const lp = needBrackets ? '(' : ''
            const rp = needBrackets ? ')' : ' '
            return lp + fn_str(node.get('left')) + ' ' + opr + ' ' + fn_str(node.get('right')) + rp
        }

        if (tp === 'unit') {
            /* field assumes to be valid and complete */
            const fieldName = node.get('field')
            const op = node.get('op')
            const val = node.get('val')
            const fd = sd.field(fieldName)
            const is_lst = Imm.List.isList(val)
            const is_str = fd.type === Tps.str
            const fn_val = v => is_str ? '"' + v + '"' : v
            return fieldName + ' ' + op + ' ' + (is_lst ? '(' + val.map(fn_val).join(',') + ')' : fn_val(val))
        }

        return ""
    }

    let ss = ''
    try {
        ss = fn_str(tree)
    }
    catch (e) {
        ss = "ERROR"
    }

    act('recalc_str').set(path, ss).dispatch()

}

const InputX = make_cmp()
InputX.mount = props => proc_recalcString(props.path, ['calc', 'tree'])
InputX.view = props => {
    return (<InputComponent {...props}/>)

    // return <input
    //     style={props.style || {}}
    //     className={props.css || ''}
    //     type={props.inputType || 'text'}
    //     value={props.value}
    //     placeholder={props.placeholder}
    //     onChange={props.handler}
    // />
}
InputX.stp = (state, props) => {
    const schema = state.getIn(['src', 'schema'])
    const fieldVals = state.getIn(['src', 'fieldVals'])
    const dataset = state.getIn(['src', 'dataset'])
    const handler = e => {
        let s = e.target.value

        if (s.at(s.length - 1) == '"') {
            /* if quotes count is odd then add one */
            let quotes = 0
            for (let idx = 0; idx < s.length; idx++) {
                if (s.at(idx) == '"') quotes++
            }

            if (quotes % 2 == 1) s = s + '"'
        }

        proc_queryStringWasChanged(s, props.path)
        // act('input_change_value')
        //     .set(props.path, s)
        //     .dispatch()
    }

    return {
        ...props,
        handler,
        // value: state.getIn(props.path, props.initialValue || ''),
    }
}
const Input = InputX.make()
Input.propTypes = {
    path: pt.array.isRequired, // path to state place for value
    initialValue: pt.string,
    style: pt.any,
    css: pt.string,
    inputType: pt.string,
}
export default Input