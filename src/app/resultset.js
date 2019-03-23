import React from 'react'
import {make_cmp, act} from "../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'
import strftime from 'strftime'


const X = make_cmp()

const tds = {
    padding: '3px 10px 3px 10px',
    border: '1px solid lightgrey',
}

const TblHead = props => {
    return <tr>
        <th style={tds}>id</th>
        <th style={tds}>name</th>
        <th style={tds}>sex</th>
        <th style={tds}>drink</th>
        <th style={tds}>weight</th>
        <th style={tds}>iq</th>
        <th style={tds}>birthday</th>
        <th style={tds}>job</th>
    </tr>

}


const fn_dt = (dt, ext = 0) => {
    let formatString = ext == 0 ? '%Y.%m.%d' : '%Y.%m.%d %H:%M:%S'
    return strftime(formatString, dt)
}

const TblRow = props => {
    const it = props.item
    return <tr>
        <td style={tds}>{it.get('id')}</td>
        <td style={tds}>{it.get('name')}</td>
        <td style={tds}>{it.get('sex')}</td>
        <td style={tds}>{it.get('drink')}</td>
        <td style={tds}>{it.get('weight')}</td>
        <td style={tds}>{it.get('iq')}</td>
        <td style={tds}>{fn_dt(it.get('birthday'))}</td>
        <td style={tds}>{it.get('job')}</td>
    </tr>
}

X.view = props => {

    const tst = {
        border: '1px solid lightgrey',
        borderCollapse: 'collapse',
    }

    const items = props.items.map(it => <TblRow key={it.get('id')} item={it}/>)
    return <table style={tst}>
        <tbody>
        <TblHead/>
        {items}
        </tbody>
    </table>

}

X.stp = (s, p) => {
    return {
        ...p,
        items: s.getIn(p.path, ImmJS.fromJS([])),
    }
}

const V = X.make()

V.propTypes = {
    path: pt.array.isRequired,
}

export default V



