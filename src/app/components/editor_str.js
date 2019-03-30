import React from 'react'
import {make_cmp, act} from "../../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import {SourceData} from "../tools/data";
import {proc_visitImmTree} from "../processing";
import {Tps} from "../srcdata";


const s0 = {border: '1px solid gray', display: 'inline-block', margin: '6px', padding: '2px',}

const EditStr = props => {
    return <div style={s0}>
        str # name : {props.item.get('name')} # hasNode : {props.item.get('hasNode') ? 'YES' : 'NO'}
    </div>
}

export default EditStr