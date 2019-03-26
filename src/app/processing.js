import antlr4 from 'antlr4/index'
import FooLexer from '../antlr/FooLexer'
import FooParser from '../antlr/FooParser'
import Listener from './listener'
import {Tps} from "./data";
import ImmJS from 'immutable'

import {fn_trimEx} from "./fns";
import {act} from "../boilerplate";

const fn_new = () => Object.create(null)

const fn_transformAST = ast => {

    const root = fn_new()

    let extNode = ast.child //entry_point. child is marker to

    const proc_do = (internalTreeNode, externalTreeNode) => {
        if (externalTreeNode.tp === 'entry_point') {
            proc_do(internalTreeNode, externalTreeNode.child)
        }

        if (externalTreeNode.tp === 'bracketed_expr') {
            proc_do(internalTreeNode, externalTreeNode.child)
        }

        if (externalTreeNode.tp === 'expr_and' || externalTreeNode.tp === 'expr_or') {
            internalTreeNode.tp = 'logical_operation'
            internalTreeNode.opr = externalTreeNode.tp === 'expr_and' ? 'and' : 'or'
            internalTreeNode.left = fn_new()
            internalTreeNode.right = fn_new()

            proc_do(internalTreeNode.left, externalTreeNode.firstChild)
            proc_do(internalTreeNode.right, externalTreeNode.secondChild)
        }

        if (externalTreeNode.tp === 'expr_unit') {
            proc_do(internalTreeNode, externalTreeNode.child)
        }

        if (externalTreeNode.tp === 'unit') {
            internalTreeNode.tp = 'unit'
            internalTreeNode.field = externalTreeNode.field
            internalTreeNode.op = externalTreeNode.op
            internalTreeNode.val = externalTreeNode.val
        }
    }

    proc_do(root, extNode)
    return root
}


const proc_visitTree = (treeNode, visitor) => {
    visitor(treeNode)
    if (treeNode.tp === 'logical_operation') {
        proc_visitTree(treeNode.left, visitor)
        proc_visitTree(treeNode.right, visitor)
    }
}


const fn_checkFieldGen = schema => fld => {
    if (typeof fld !== 'string') return fld
    const res = {name: fld, variants: [], valid: false, complete: true}
    for (let idx = 0; idx < schema.size; idx++) {
        const colDef = schema.get(idx)
        const fieldName = colDef.get('nm')

        if (fieldName === fld) {
            res.valid = true
            res.tp = colDef.get('tp')
            return res
        }

        if (fieldName.startsWith(fld)) {
            res.valid = true
            res.complete = false
            res.variants.push(fieldName)
        }
    }
    return res
}


const fn_checkValueAndType = (tp, val) => {
    if (tp === Tps.int) {
        return !isNaN(val)
    }

    if (tp === Tps.str) {
        return true
    }

    return true
}


// const fn_trimEx = x => {
//     let res = x.trim()
//     if (res.charAt(0) === '"' && res.charAt(res.length - 1) === '"') {
//         res = res.slice(1, res.length - 1)
//     }
//     return res
// }


const fn_checkValGen = (fieldVals) => (nm, tp, val) => {

    if (typeof val === 'string') {
        const valx = fn_trimEx(val)
        const res = {isLst: false, value: valx, valid: false, complete: true, variants: []}

        if (tp === Tps.int && !isNaN(valx)) {
            res.valid = true
            return res
        }

        if (tp === Tps.str) {
            if (fieldVals.has(nm)) {
                const valsList = fieldVals.get(nm)
                for (let idx = 0; idx < valsList.size; idx++) {
                    const valRef = valsList.get(idx)
                    if (valx === valRef) {
                        res.valid = true;
                        return res
                    }

                    if (valRef.startsWith(valx)) {
                        res.valid = true
                        res.complete = false
                        res.variants.push(valRef)
                    }
                }
            }
            else {
                res.valid = true
            }
        }
        // todo: floats/doubles/datetimes/etc
        return res
    }

    if (Array.isArray(val)) {
        // Проверим что все валюшки правильно кастятся к типу, а для стрингов - что все они полные валидные
        // Для листа стрингов пока не будем ничего делать про недозаполненность значений

        const valx = val.map(fn_trimEx)

        const res = {
            isLst: true,
            value: valx,
            valid: true,
            complete: true,
        }


        if (tp === Tps.int) {
            res.valid = valx.reduce((accumulator, item) => accumulator && !isNaN(item), true)
            return res
        }

        if (tp === Tps.str) {
            if (!fieldVals.has(nm)) return res

            const valRefs = fieldVals.get(nm)
            res.valid = valx.reduce((a, it) => a && valRefs.includes(it), true)
            return res
        }


        // todo: for other types
        return res

    }

    //invalid branch, do nothing
    return val
}


const proc_enrichTree = (schema, fieldVals) => tree => {

    const fn_checkField = fn_checkFieldGen(schema)
    const fn_checkVal = fn_checkValGen(fieldVals)

    const fn_fieldOk = node => node.field.valid && node.field.complete

    const unitVisitor = node => {

        if (node.tp !== 'unit') return

        const fieldName = node.field || '_no_name_'
        node.field = fn_checkField(fieldName)

        const op = node.op
        if (typeof op === 'string' && op !== null) {
            node.op = {
                val: op,
                requireList: op.toLowerCase() === 'in' || op.toLowerCase() === 'not in',
            }
        }

        if (fn_fieldOk(node)) {
            const val = node.val
            node.val = fn_checkVal(node.field.name, node.field.tp, val)
        }
    }
    proc_visitTree(tree, unitVisitor)
}


// const fn_calculateFuncAndState = tree => {
//     const completionList = [] // Список кейсов для автокомплита
//     let fn_filter = it => true // Функция отбора. Для варианта ImmJS map
//
//     let valid = true // Нормальное ли дерево в целом (могут быть кейсы на инкомплитность)
//     let complete = true //Полностью ли определено дерево
//
//     const visitor = node => {
//
//     }
//
// }

const fn_valOkGen = src => it => {
    if (Array.isArray(src)) return src.includes(it)
    return src == it
}


const fn_calculateFilterFunction = tree => {
    const fn_calcNodeFunction = (node) => {

        if (node.tp === 'logical_operation') {
            if (node.opr === 'and') {
                return ( it => fn_calcNodeFunction(node.left)(it) && fn_calcNodeFunction(node.right)(it))
            }

            if (node.opr === 'or') {
                return (it => fn_calcNodeFunction(node.left)(it) || fn_calcNodeFunction(node.right)(it))
            }
        }

        if (node.tp === 'unit') {
            const fn_valOk = fn_valOkGen(node.val.value)
            const op = node.op.val

            if (op == '=') return it => fn_valOk(it.get(node.field.name))
            if (op == '!=') return it => !fn_valOk(it.get(node.field.name))

            if (op == 'in') return it => fn_valOk(it.get(node.field.name))
            if (op == 'not in') return it => !fn_valOk(it.get(node.field.name))

            if (node.field.tp == Tps.int) {
                const nodeVal = node.val.value
                if (isNaN(nodeVal)) return it => false

                if (op == '>') return it => it.get(node.field.name) > nodeVal
                if (op == '>=') return it => it.get(node.field.name) >= nodeVal
                if (op == '<') return it => it.get(node.field.name) < nodeVal
                if (op == '<=') return it => it.get(node.field.name) <= nodeVal
            }

            //TODO : cover all other cases
        }

        return it => false
    }

    try {
        return fn_calcNodeFunction(tree)
    }
    catch (e) {
        return it => false
    }
}


const fn_getCompletionsCandidates = tree => {
    const completions = []

    const visitor = node => {
        if (node.tp != 'unit') return
        const f = node.field
        if (!f.valid) return

        if (!f.complete) {
            completions.push({
                tp: 'field_name',
                current: f.name,
                variants: [...f.variants],
            })
            return
        }

        const v = node.val
        if (v.valid && !v.complete) {
            completions.push({
                tp: 'field_val',
                fld: f.name,
                current: v.value,
                variants: [...v.variants],
            })
        }
    }
    try {
        proc_visitTree(tree, visitor)
    }
    catch (e) {
        completions.length = 0
    }
    return completions
}


const fn_areAllUnitsValid = tree => {
    let res = true

    const visitor = node => {
        if (!res) return
        if (node.tp !== 'unit') return
        res = res && 'field' in node && 'valid' in node.field && node.field.valid //this field is present by default
        if ('val' in node && 'valid' in node.val) res = res && node.val.valid
    }

    try {
        proc_visitTree(tree, visitor)
    }
    catch (e) {
        res = false
    }

    return res
}

const fn_areAllUnitsComplete = tree => {
    let res = true

    const visitor = node => {
        if (!res) return
        if (node.tp !== 'unit') return
        res = res && node.field.complete // field is present by default
        if (!res) return

        res = res && 'val' in node && ('complete' in node.val) && node.val.complete
        if (!res) return

        res = res && (node.op.requireList && node.val.isLst || !node.op.requireList && !node.val.isLst)
    }
    try {
        proc_visitTree(tree, visitor)
    }
    catch (e) {
        res = false
    }
    return res
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
    proc_enrichTree(schema, fieldVals)(customTree)
    return customTree
}


const proc_queryStringWasChanged = (str, schema, fieldVals, dataset) => {
    //1. parse and build tree
    const t = fn_parseQueryString(schema, fieldVals)(str)
    const isValid = fn_areAllUnitsValid(t)
    const isComplete = fn_areAllUnitsComplete(t)
    const completions = fn_getCompletionsCandidates(t)

    let data = ImmJS.fromJS([])
    if (isComplete && isValid) {
        const fn = fn_calculateFilterFunction(t)
        data = dataset.filter(fn)
    }

    act('query_string_were_changed')
        .set(['calc', 'tree'], t)
        .set(['calc', 'treeIsValid'], isValid)
        .set(['calc', 'treeIsComplete'], isComplete)
        .set(['calc', 'completions'], completions)
        .set(['dst'], data)
        .dispatch()
}


export {
    proc_queryStringWasChanged,
    fn_parseQueryString,
    fn_calculateFilterFunction,
    fn_areAllUnitsValid,
    fn_areAllUnitsComplete,
    fn_getCompletionsCandidates
}

