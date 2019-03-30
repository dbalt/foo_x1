import React from 'react'
import {act, make_cmp} from "../../boilerplate";
import pt from 'prop-types'


const X = make_cmp()
    .setMount(props => act('boo').set(props.flagPath, false).dispatch())
    .setView(props => <div/>)
    .make()

const Y = make_cmp()
    .setView(props => props.flag ? (<X {...props}/>) : (<div>{props.children}</div>))
    .setStp((s, p) => ({...p, flag: s.getIn(p.flagPath)}))
    .make()

Y.propTypes = {
    flagPath: pt.array.isRequired
}

export default Y


