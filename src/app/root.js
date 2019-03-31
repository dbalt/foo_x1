import React from 'react'
import {make_cmp, act} from "../boilerplate";

import ImmJS from 'immutable'
import Inp from './components/query_string_input'
import Pres from './tools/pres'
import Recalc from './tools/recalc'

import {loadAndPrepareAllStuff} from "./srcdata";

import {ResultSetFiltered, ResultSetSource} from "./components/resultcalc";

import AstViewer from './components/ast_viewer'

//
import Editors from './components/editors'
//
// import TreeState from './tree_state'
import Completions from './components/completions'


import {proc_queryStringWasChanged} from "./processing";


const inputValPath = ['zzz', 'inputVal']
const inputRecalcValPath = ['zzz', 'inputValRecalcFlag']


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


    return (<div style={containerStyle}>
        <Pres label="Debug version of component">
            <Pres label="Query string">
                <Recalc flagPath={inputRecalcValPath}>
                    <Inp path={inputValPath} style={inputStyle}/>
                </Recalc>
            </Pres>

            <Pres label="Editing widgets"> <Editors treePath={['calc', 'tree']}/> </Pres>


            {/*<Pres label="Tree state"> <TreeState/> </Pres>*/}

            <Pres label="Completions"> <Completions/> </Pres>


            <Pres label="Result">
                <ResultSetFiltered path={['src', 'dataset']} treePath={['calc', 'tree']}/>
            </Pres>

            <Pres label="AST viewer">
                <AstViewer strPath={inputValPath}/>
            </Pres>


            <Pres label="Full dataset">
                <ResultSetSource path={['src', 'dataset']}/>
            </Pres>

        </Pres>
    </div>)
}

RootComponent.stp = (state, props) => {
    return {
        ...props,
        src: state.get('src'),
        foo: state.getIn(['foo'], ''),
    }
}

RootComponent.mount = async props => {
    // Загрузим и приготовим всё
    await loadAndPrepareAllStuff()

    // Типа мы послали нормальную строчку
    // setTimeout(() => {
    //     const tst = 'job not in ("admin", "programmer") and sex = "female" and ( weight < 75 and iq > 120 or  drink in ("beer", "vodka"))'
    //     // proc_queryStringWasChanged(tst, props.src.get('schema'), ImmJS.fromJS(fieldValues), ImmJS.fromJS(data.dataset))
    //     proc_queryStringWasChanged(tst, ['zzz', 'inputVal'])
    //     // act('demo').set(['zzz', 'inputVal'], tst).dispatch()
    // }, 1000)

    // setInterval(() => act('tst').set(inputRecalcValPath, true).dispatch(), 5000)
}


export default RootComponent.make()

