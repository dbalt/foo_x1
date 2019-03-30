import antlr4 from 'antlr4/index'
import FooLexer from '../antlr/FooLexer'
import FooParser from '../antlr/FooParser'
import Listener from './listener'
// import {Tps} from "./source_data";
import ImmJS from 'immutable'

// import {fn_trimEx} from "./fns";
import {act, currentState} from "../boilerplate";


const fn_new = () => Object.create(null)


const fn_transformAST = ast => {


    const root = fn_new()
    root.path = []

    let extNode = ast.child //entry_point. child is marker to

    const proc_do = (node, srcNode) => {
        if (srcNode.tp === 'entry_point') {
            proc_do(node, srcNode.child)
        }

        if (srcNode.tp === 'bracketed_expr') {
            proc_do(node, srcNode.child)
        }

        if (srcNode.tp === 'expr_and' || srcNode.tp === 'expr_or') {
            node.tp = 'logical_operation'
            node.opr = srcNode.tp === 'expr_and' ? 'and' : 'or'
            node.left = fn_new()
            node.left.path = [...node.path, 'left']
            node.right = fn_new()
            node.right.path = [...node.path, 'right']

            proc_do(node.left, srcNode.firstChild)
            proc_do(node.right, srcNode.secondChild)
        }

        if (srcNode.tp === 'expr_unit') {
            proc_do(node, srcNode.child)
        }

        if (srcNode.tp === 'unit') {
            node.tp = 'unit'
            node.field = srcNode.field
            node.op = srcNode.op
            node.val = srcNode.val
        }
    }

    proc_do(root, extNode)
    return root
}


const proc_visitTree = (tree, visitor) => {
    visitor(tree)
    if (tree.tp === 'logical_operation') {
        proc_visitTree(tree.left, visitor)
        proc_visitTree(tree.right, visitor)
    }
}

const proc_visitImmTree = (tree, visitor) => {
    visitor(tree)
    if (tree.get('tp') === 'logical_operation') {
        proc_visitImmTree(tree.get('left'), visitor)
        proc_visitImmTree(tree.get('right'), visitor)
    }
}

const fn_parseQueryString = (schema, fieldVals) => input => {
    const chars = new antlr4.InputStream(input)
    const lexer = new FooLexer.FooLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new FooParser.FooParser(tokens)
    parser.buildParseTrees = true
    const tree = parser.eval()
    const listener = new Listener()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    const ast = listener.treeData()
    const customTree = fn_transformAST(ast)
    return customTree
}


const proc_queryStringWasChanged = (str, strPath) => {
    //1. parse and build tree


    const state = currentState()

    const schema = state.getIn(['src', 'schema'], ImmJS.fromJS([]))
    const fieldVals = state.getIn(['src', 'fieldVals'], ImmJS.fromJS({}))
    const dataset = state.getIn(['src', 'dataset'], ImmJS.fromJS([]))

    const t = fn_parseQueryString(schema, fieldVals)(str)

    act('query_string_were_changed')
        .set(['calc', 'tree'], t)
        .set(strPath, str)
        .dispatch()
}

export {
    proc_queryStringWasChanged,
    fn_parseQueryString,
    proc_visitImmTree,
    proc_visitTree
}

