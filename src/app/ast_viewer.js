import React from 'react'
import {make_cmp, act} from "../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'


import {fn_parseQueryString} from "./processing";

import JsonTree from 'react-json-tree'

const X = make_cmp()

X.view = props => {
    return <div><JsonTree data={props.tree}/></div>
}

X.stp = (state, props) => {
    const input = state.getIn(props.strPath, '')

    const schema = state.getIn(['src', 'schema'], ImmJS.fromJS([]))
    const fieldVals = state.getIn(['src', 'fieldVals'], ImmJS.fromJS({}))

    const res = fn_parseQueryString(schema, fieldVals)(input)
    console.log(res)
    return {
        ...props,
        tree: res,
    }
}

const V = X.make()

V.propTypes = {
    strPath: pt.array.isRequired,
}

export default V
