import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'


import {fn_parseQueryString} from "../processing";

import JsonTree from 'react-json-tree'

const AstViewerX = make_cmp()

AstViewerX.view = props => {
    return <div><JsonTree data={props.tree}/></div>
}

AstViewerX.stp = (state, props) => {
    // console.log(res)
    return {
        ...props,
        tree: state.getIn(['calc', 'tree'], ImmJS.fromJS({})),
    }
}

const AstViewer = AstViewerX.make()

AstViewer.propTypes = {
    strPath: pt.array.isRequired,
}

export default AstViewer
