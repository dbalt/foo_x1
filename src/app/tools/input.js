import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'


const InputX = make_cmp()
InputX.view = props => {
    return <input
        style={props.style || {}}
        className={props.css || ''}
        type={props.inputType || 'text'}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handler}
    />
}
InputX.stp = (state, props) => {

    const handler = props.handler ? props.handler : e => {
        const s = e.target.value
        act('change_input_val').set(props.path, s).dispatch()
    }

    return {
        ...props,
        handler,
        value: state.getIn(props.path, props.initialValue || ''),
    }
}

const Input = InputX.make()

Input.propTypes = {
    path: pt.array.isRequired, // path to state place for value
    initialValue: pt.string,
    handler: pt.func,
    style: pt.any,
    css: pt.string,
    inputType: pt.string,
}

export default Input