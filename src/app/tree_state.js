import React from 'react'
import {make_cmp, act} from "../boilerplate";

import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'


const X = make_cmp()

X.view = props => {
    const {isValid, isComplete} = props
    if (isValid && isComplete) return <div> (OK) Tree has valid structure and it is complete.</div>
    if (isValid && !isComplete) return <div> (CAN BE OK) Tree has valid structure but its incomplete </div>
    return <div> (FAIL) Tree structure is invalid </div>

}

X.stp = (state, props) => {
    return {
        ...props,
        isValid: state.getIn(['calc', 'treeIsValid'], false),
        isComplete: state.getIn(['calc', 'treeIsComplete'], false),
    }
}

const V = X.make()

export default V





