import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import immpt from 'react-immutable-proptypes'


/* input component with reporting of content change and caret position change */
const X = make_cmp()

X.view = props => {

    const changeValueHandler = e => act('input_change_value')
        .set(props.path, e.target.value)
        .dispatch()

    return <input
        style={props.style || {}}
        className={props.css || ''}
        type={props.inputType || 'text'}
        value={props.value}
        placeholder={props.placeholder}
        onChange={changeValueHandler}
    />
}

X.stp = (state, props) => {
    return {
        ...props,
        value: state.getIn(props.path, props.initialValue || ''),
    }
}

const V = X.make()
V.propTypes = {
    path: pt.array.isRequired, // path to state place for value
    initialValue: pt.string,
    style: pt.any,
    css: pt.string,
    inputType: pt.string,
}
export default V