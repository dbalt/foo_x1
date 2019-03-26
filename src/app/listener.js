import antlr4 from 'antlr4/index'
import FooLexer from '../antlr/FooLexer'
import FooParser from '../antlr/FooParser'
import FooListener from '../antlr/FooListener'
import Tree from 'antlr4/tree/Tree'
import {fn_trimEx} from "./fns";

//FooParser.ExprContext = ExprContext

const is_unit = ctx => ctx instanceof FooParser.FooParser.UnitContext
const is_term_node = ctx => ctx instanceof Tree.TerminalNodeImpl
const is_expr = ctx => ctx instanceof FooParser.FooParser.ExprContext

const childrenCount = ctx => Array.isArray(ctx.children) ? ctx.children.length : 0

const childText = (ctx, idx) => {
    if (idx == null || idx == undefined) idx = 0
    const c = ctx.children[idx]
    if (c == null) return ''
    if (!('text' in c)) return c.getText()
    return c.text
}

const expr_is_unit = ctx => {
    if (childrenCount(ctx) !== 1) return false
    return is_unit(ctx.children[0])
}


const expr_is_expr_in_brackets = ctx => {
    if (childrenCount(ctx) !== 3) return false
    return is_term_node(ctx.children[0])
        && is_expr(ctx.children[1])
        && is_term_node(ctx.children[2])
        && childText(ctx, 0) === '('
        && childText(ctx, 2) === ')'
}


const expr_is_op = ctx => {
    if (childrenCount(ctx) !== 3) return false
    return is_expr(ctx.children[0])
        && is_term_node(ctx.children[1])
        && is_expr(ctx.children[2])
        && (
            childText(ctx, 1).toLowerCase() === 'and'
            || childText(ctx, 1).toLowerCase() === 'or'
        )
}

const expr_is_and = ctx => expr_is_op(ctx) && childText(ctx, 1).toLowerCase() === 'and'
const expr_is_or = ctx => expr_is_op(ctx) && childText(ctx, 1).toLowerCase() === 'or'


class MyFooListener extends FooListener.FooListener {

    constructor() {
        super()

        this._lvl = 0
        this._tree = {
            tp: 'root_node',
            lvl: this._lvl,
        }
        this._currentNode = this._tree
    }


    enterEval(ctx) {
        const node = {}
        this._lvl++
        this._addNode(node)
        node.tp = 'entry_point'

        this._currentNode = node

    }

    exitEval(ctx) {
        this._lvl--
    }

    _addNode(node) {
        const parent = this._currentNode
        if (parent.tp == 'expr_and' || parent.tp == 'expr_or') {
            if ('firstChild' in parent) {
                parent.secondChild = node
            }
            else {
                parent.firstChild = node
            }

        }
        else {
            parent.child = node
        }
        node.parent = parent
        node.lvl = this._lvl
    }


    enterExpr(ctx) {

        const parent = this._currentNode
        this._lvl++

        const node = {}
        this._addNode(node)

        if (expr_is_expr_in_brackets(ctx)) {
            node.tp = 'bracketed_expr'
        }
        else if (expr_is_unit(ctx)) {
            node.tp = 'expr_unit'
        }

        else if (expr_is_and(ctx)) {
            node.tp = 'expr_and'
        }

        else if (expr_is_or(ctx)) {
            node.tp = 'expr_or'
        }
        else {
            node.tp = 'unknown'
        }

        this._currentNode = node
    }

    exitExpr(ctx) {
        this._lvl--
        this._currentNode = this._currentNode.parent
    }

    enterUnit(ctx) {
        this._lvl++
        const node = {}
        this._addNode(node)

        node.tp = 'unit'
        this._currentNode = node
    }

    exitUnit(ctx) {
        this._lvl--
        this._currentNode = this._currentNode.parent
    }

    enterFld(ctx) {
        const node = this._currentNode
        node.field = childText(ctx)
    }

    exitFld(ctx) {
        
    }

    enterVal(ctx) {
        const n = this._currentNode
        if (ctx.children == null) return

        let val = ''
        const buf = []
        for (let i = 0; i < ctx.children.length; i++) {
            buf.push(childText(ctx, i))
            // val += childText(ctx, i)
            // if (i < ctx.children.length - 1) val += ' ' //todo: refactor
        }
        val = fn_trimEx(buf.join(' ')).trim()

        if ('val' in n && Array.isArray(n.val)) {
            n.val.push(val)
        }
        else {
            n.val = val
        }
    }

    exitVal(ctx) {
    }

    enterVal_lst(ctx) {
        this._currentNode.val = []
    }

    exitVal_lst(ctx) {
    }

    enterOp_single(ctx) {
        this._currentNode.op = childText(ctx)
        this._currentNode.valList = false
    }

    exitOp_single(vtx) {
    }

    enterOp_lst(ctx) {
        this._currentNode.op = childText(ctx)
        this._currentNode.valList = true
    }

    exitOp_lst(ctx) {
    }

    treeData() {
        return this._tree
    }
}


export default MyFooListener