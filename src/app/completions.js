import React from 'react'
import {make_cmp, act} from "../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'

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

}

const FieldCompletion = props => {
    const c = props.c

    const items = c.get('variants').map(it => <div style={itemStyle} id={it}> {it} </div>)

    return (<div style={containerStyle}>
        <div> field completion</div>
        <div> current val : {c.get('current')} </div>
        <div>
            {items}
        </div>

    </div>)
}

const ValueCompletion = props => {
    const c = props.c

    const items = c.get('variants').map(it => <div style={itemStyle} id={it}> {it} </div>)


    return (<div style={containerStyle}>
        <div> Value completion</div>
        <div> Field : {c.get('fld')} </div>
        <div> current val : {c.get('current')} </div>
        <div>
            {items}
        </div>

    </div>)
}

const X = make_cmp()

X.stp = (state, props) => {
    const completions = state.getIn(['calc', 'completions'], ImmJS.fromJS([]))
    return {
        ...props,
        completions,
    }
}

X.view = props => {

    let k = 0
    const fn_id = () => k++

    return <div>
        {props.completions.map(it => it.get('tp') == 'field_name' ? <FieldCompletion key={fn_id()} c={it}/> :
            <ValueCompletion key={fn_id()} c={it}/>)}
    </div>
}


export default X.make()