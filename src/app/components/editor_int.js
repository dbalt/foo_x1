import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {SourceData} from "../tools/data";
import {proc_visitImmTree} from "../processing";
import {Tps} from "../srcdata";

const intOps = ['>', '>=', '<=', '<', '=', '!=']


const Select = props => {
    return <Select
        options = {intOps}
    />
}


const EditInt = props => {
    return <div>
        int # name : {props.item.get('name')} # hasNode : {props.item.get('hasNode') ? 'YES' : 'NO'}
    </div>
}


export default EditInt