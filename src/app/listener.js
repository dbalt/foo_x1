import antlr4 from 'antlr4/index'
import FooLexer from '../antlr/FooLexer'
import FooParser from '../antlr/FooParser'
import FooListener from '../antlr/FooListener'


class MyFooListener extends FooListener.FooListener {

    constructor() {
        super()

        this._tree = {}
        this._currentNode = {}
        this._lvl = 0

    }


    enterEval(ctx) {
    }

    exitEval(ctx) {

    }

    enterExpr(ctx) {


        const childrenCount = Array.isArray(ctx.children) ? ctx.children.length : 0

        console.log('entered expr', ctx, '$$$$', childrenCount)

        if (childrenCount > 0) {
            const first = ctx.children[0]
            console.log('first is exp', first instanceof FooParser.FooParser.ExprContext)

        }

    }

    exitExpr(ctx) {

    }

    enterUnit(ctx) {
    }

    exitUnit(ctx) {
    }

    enterFld(ctx) {
    }

    exitFld(ctx) {
    }

    enterVal(ctx) {
    }

    exitVal(ctx) {
    }

    enterVal_lst(ctx) {
    }

    exitVal_lst(ctx) {
    }

    enterOp_single(ctx) {
    }

    exitOp_single(vtx) {
    }

    enterOp_lst(ctx) {
    }

    exitOp_lst(ctx) {
    }

}


export default MyFooListener