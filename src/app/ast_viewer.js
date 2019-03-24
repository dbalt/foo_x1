import React from 'react'
import {make_cmp, act} from "../boilerplate";
import pt from 'prop-types'
import ImmJS from 'immutable'
import immpt from 'react-immutable-proptypes'

import antlr4 from 'antlr4/index'
import FooLexer from '../antlr/FooLexer'
import FooParser from '../antlr/FooParser'
import Listener from './listener'

const fn_parse = input => {
    const chars = new antlr4.InputStream(input)
    const lexer = new FooLexer.FooLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new FooParser.FooParser(tokens)
    parser.buildParseTrees = true
    const tree = parser.eval()
    const listener = new Listener()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}


const X = make_cmp()

X.view = props => {
    return <div> Viewer </div>
}

X.stp = (state, props) => {
    const input = state.getIn(props.strPath, '')
    const res = fn_parse(input)

    return {
        ...props
    }
}

const V = X.make()

V.propTypes = {
    strPath: pt.array.isRequired,
}

export default V
