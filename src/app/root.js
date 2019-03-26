import React from 'react'
import {make_cmp, act} from "../boilerplate";

import ImmJS from 'immutable'
import Inp from './tools/input'
import Pres from './tools/pres'

import ResultSet from './resultset'
import {fetchData, Tps} from "./data";

import AstViewer from './ast_viewer'


import TreeState from './tree_state'
import Completions from './completions'

import {proc_queryStringWasChanged} from "./processing";

const RootComponent = make_cmp()
RootComponent.view = props => {
    const containerStyle = {margin: '25px',}

    const inputStyle = {
        width: 'calc(100% - 12px)',
        lineHeight: '15px',
        padding: '3px 6px 3px 6px',
        fontSize: '15px',
        border: "1px solid gray",
    }

    const inputValPath = ['zzz', 'inputVal']

    return (<div style={containerStyle}>
        <Pres label="Debug version of component">
            <Pres label="Query string">
                <Inp path={inputValPath} style={inputStyle}/>
            </Pres>

            <Pres label="Editing widgets"> TO DO </Pres>


            <Pres label="Tree state"> <TreeState/> </Pres>

            <Pres label="Completions"> <Completions/> </Pres>


            <Pres label="Result">
                <ResultSet path={['dst']}/>
            </Pres>

            <Pres label="AST viewer">
                <AstViewer strPath={inputValPath}/>
            </Pres>


            <Pres label="Full dataset">
                <ResultSet path={['src', 'dataset']}/>
            </Pres>

        </Pres>
    </div>)
}

RootComponent.stp = (state, props) => {
    return {
        ...props,
        foo: state.getIn(['foo'], ''),
    }
}

RootComponent.mount = async props => {

    const data = await fetchData() // Типа мы её зафетчили откуда то

    const stringFields = data.schema.filter(it => it.tp == Tps.str).map(it => it.nm)

    const fieldValues = data.dataset.reduce((accumulator, currentItem) => {
        stringFields.forEach(fld => {

            if (!(fld in accumulator))
                accumulator[fld] = []

            const arr = accumulator[fld]

            const val = currentItem[fld]

            if (!arr.includes(val))
                arr.push(val)
        })
        return accumulator
    }, new Object())

    act('initial_component_state')
        .set(['src'], data)
        .set(['src', 'fieldVals'], fieldValues)
        .dispatch()

    setTimeout(() => {
        const tst = 'job not in ("admin", "programmer") and sex = "female" and ( weight < 75 and iq > 120 or  drink in ("beer", "vodka"))'
        proc_queryStringWasChanged(tst, ImmJS.fromJS(data.schema), ImmJS.fromJS(fieldValues), ImmJS.fromJS(data.dataset))
        act('demo').set(['zzz', 'inputVal'], tst).dispatch()
    }, 1000)
}


export default RootComponent.make()

