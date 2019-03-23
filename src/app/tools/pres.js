import React from 'react'
import pt from 'prop-types'


const V = props => {
    const contStyle = {
        margin: '10px',
        border: '1px solid gray',
        padding: '10px'
    }

    const labelStyle = {
        fontSize: '15px',
        color: 'gray',
        marginBottom: '10px',
    }

    return <div style={contStyle}>
        <div style={labelStyle}> {props.label} </div>
        <div>{props.children}</div>
    </div>
}


V.propTypes = {
    label: pt.string.isRequired,
}

export default V