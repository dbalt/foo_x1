import React from 'react'
import {make_cmp, act} from "../boilerplate";
import ImmJS from 'immutable'

// const fn_parser_gen = (schema, fn_ops) => src => {
//     const res = []
//
//     let openBrackets = 0
//     let insideQuotes = false
//
//     let item = ''
//
//     const space = ' '
//
//     const statesWaitingFor = {
//         propName: 1, op: 2, val: 3, bigop: 4,
//     }
//
//
//     let state = statesWaitingFor.propName
//
//
//     const fn_check_gen = valsIter => x => {
//         valsIter.forEach(it => {
//             if (it === x) return 2
//             if (it.startsWith(x)) return 1
//         })
//         return 0
//     }
//
//     const propNames = schema.map(it => it.get('nm'))
//     const fn_checkProp = fn_check_gen(propNames)
//
//     let lastLexem = null
//     let fn_checkOp = () => 0 //default checker
//
//
//
//
//     for (let i = 0; i < src.length; i++) {
//         let c = src.charAt(i)
//
//
//
//         if (c === space) {
//             if (state === statesWaitingFor.propName) {
//                 const x = fn_checkProp(item)
//                 lastLexem = {tp: 'propName', val: item, complete: x != 1, valid: x !== 0}
//                 res.push(lastLexem)
//                 item = ''
//                 state = statesWaitingFor.op
//
//                 if (lastLexem.complete && lastLexem.valid)
//                     fn_checkOp = fn_check_gen(fn_ops(lastLexem.val))
//             }
//
//             if (state === statesWaitingFor.op) {
//                 const x = fn_check_gen(item)
//                 lastLexem = {tp: 'op', val: item, complete: x !== 1, valid: x !== 0}
//                 res.push(lastLexem)
//                 item = ''
//                 state = statesWaitingFor.val
//             }
//         }
//
//
//         item += c
//
//
//         if (state == statesWaitingFor.propName) {
//             // check for prop
//             const x = fn_checkProp(item)
//
//
//         }
//
//
//     }
//
// }


const parse_gen = (schema, fn_ops, fieldVals) => {

    /* states map */
    const S = {
        waitForPropName: 1,
        waitForOp: 2,
        waitForVal: 3,
        waitForBigOp: 4,
    }

    /* Найдем закрывающую скобку соответствующую этой открывающей */
    const fn_findClosingBracketIndex = (openBracketIndex, txt) => {
        let openBrackets = 1;
        for (let i = 1; i < txt.length; i++) {
            if (txt.charAt(i) === '(') openBrackets++;
            if (txt.charAt(i) === ')') {
                openBrackets--;
                if (openBrackets === 0) {
                    return i;
                }
            }
        }
        return 1;
    }


    const fn_check_gen = valsIter => x => {
        valsIter.forEach(it => {
            if (it === x) return 2
            if (it.startsWith(x)) return 1
        })
        return 0
    }
    const fn_checkProp = fn_check_gen(schema.map(it => it.get('nm')))
    let fn_checkOp = () => 0 // default
    let fn_checkVal = () => 0

    const fn_nextIndex = (src, chr, currIndex) => {
        let res = src.indexOf(chr, currIndex + 1)
        if (res === -1) res = src.length
        return res
    }

    const fn_trimEx = x => {
        let res = x.trim()
        if (res.charAt(0) === '"' && res.charAt(res.length - 1) === '"') {
            res = res.slice(1, res.length - 1)
        }
        return res
    }

    const parse = src => {
        let s = S.waitForPropName // initial state
        const res = []

        let cur = 0
        let item = '';
        let lastProp = null

        /*
        restrictions :
         1. propName should not contains spaces
         2. op should not contain spaces
         3.
        */

        while (cur < src.length) {
            let c = src.charAt(cur)


            if (s === S.waitForPropName) {
                if (c === '(') {
                    // У нас скобки, которые группируют условия. Находим закрывающую и парсим рекурсивно
                    const closingBracketPosition = fn_findClosingBracketIndex(cur, src)
                    if (closingBracketPosition !== -1) {
                        res.push({tp: 'openBracket', val: '(', complete: true, valid: true})
                        for (let l in parse(src.subarray(cur + 1, closingBracketPosition - 1)))
                            res.push(l)
                        res.push({tp: 'closingBracket', val: ')', complete: true, valid: true})
                        s = S.waitForBigOp // следующая лексема будет AND или OR или чё у нас там ? В общем логический оператор
                        cur = closingBracketPosition + 1
                    }
                    else {
                        res.push({tp: 'openBracket', val: '(', complete: true, valid: false})
                        cur++
                    }

                    continue
                }

                if (c === ' ') {
                    // пробел просто левая херня, скипим
                    cur++
                    continue
                }

                // Читаем propName
                let nextSpaceIndex = fn_nextIndex(src, ' ', cur)
                item = src.slice(cur, nextSpaceIndex)
                cur = nextSpaceIndex

                const x = fn_checkProp(item)
                const lexem = {tp: 'propName', val: item, complete: x !== 1, valid: x !== 0}
                res.push(lexem)
                s = S.waitForOp
                if (lexem.complete && lexem.valid) {
                    fn_checkOp = fn_check_gen(fn_ops(lexem.val))
                    lastProp = lexem.val
                }
                continue
            }

            if (s === S.waitForOp) {
                if (c === ' ') {
                    // пробел просто левая херня, скипим
                    cur++
                    continue
                }

                let nextSpaceIndex = fn_nextIndex(src, ' ', cur)
                item = src.slice(cur, nextSpaceIndex)
                cur = nextSpaceIndex

                const x = fn_checkOp(item)
                const lexem = {tp: 'op', val: item, complete: x !== 1, valid: x !== 0}
                res.push(lexem)
                fn_checkOp = () => 0
                fn_checkVal = val => {
                    if (lastProp === null) return 0
                    if (!fieldVals.has(lastProp)) return 2
                    fieldVals.getIn([lastProp]).forEach(it => {
                        if (it === val) return 2
                        if (it.startsWith(val)) return 1
                    })
                    return 0
                }
                s = S.waitForVal
                continue
            }


            if (s === S.waitForVal) {
                if (c === ' ') {
                    // пробел просто левая херня, скипим
                    cur++
                    continue
                }

                if (c === '(') {
                    const closingBracketPosition = fn_findClosingBracketIndex(cur, src)
                    if (closingBracketPosition !== -1) {
                        /* Все что между скобками - список значений, разделенных через запятую и пофиг на кавычки */
                        const lexems = src.slice(cur + 1, closingBracketPosition - 1)
                            .split(',')
                            .map(it => fn_trimEx(it))
                            .map(it => {
                                const x = fn_checkVal(it)
                                return {tp: 'val', val: it, complete: x !== 1, valid: x !== 0}
                            })
                    }
                }
            }

            if (c === ')') {
                res.push({tp: 'closingBracket', val: ')', complete: true, valid: false})
                cur++
                continue
            }

            if (c === '(') {
                res.push({tp: 'openBracket', val: ')', complete: true, valid: false})
                cur++
                continue
            }
        }

    }
}