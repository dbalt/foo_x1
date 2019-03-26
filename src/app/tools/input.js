import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import immpt from 'react-immutable-proptypes'
import {proc_queryStringWasChanged} from "../processing";


const X = make_cmp()

X.view = props => {


    return <input
        style={props.style || {}}
        className={props.css || ''}
        type={props.inputType || 'text'}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handler}
    />
}

X.stp = (state, props) => {


    const schema = state.getIn(['src', 'schema'])
    const fieldVals = state.getIn(['src', 'fieldVals'])
    const dataset = state.getIn(['src', 'dataset'])
    const handler = e => {
        const s = e.target.value
        proc_queryStringWasChanged(s, schema, fieldVals, dataset)
        act('input_change_value')
            .set(props.path, s)
            .dispatch()
    }

    return {
        ...props,
        handler,
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