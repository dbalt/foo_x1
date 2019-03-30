import ImmJS from 'immutable'
import {currentState} from "../../boilerplate";
import {Tps} from "../srcdata";

const listHas = (lst, fn) => {
    const x = lst.find(fn)
    return x != null
}

class FieldDescr {
    constructor(schemaNode, fieldVals) {
        this._schemaNode = schemaNode
        this._fieldVals = fieldVals
    }

    get name() {
        return this._schemaNode.get('nm')
    }

    get type() {
        return this._schemaNode.get('tp')
    }

    hasRefList() {
        return this._fieldVals.has(this.name)
    }

    refList() {
        return this._fieldVals.get(this.name, ImmJS.fromJS([]))
    }

    isComplete(val) {
        if (this.type === Tps.int) return true
        if (this.type === Tps.str) {
            if (!this.hasRefList()) return true
            return this.refList().includes(val)
        }
        return true //todo ?
    }

    isValid(val) {
        if (this.type === Tps.str) {
            if (!this.hasRefList()) return true
            if (this.refList().find(it => it.startsWith(val)) != null) return true
            return false
        }
        if (this.type == Tps.int) {
            return !isNaN(val)
        }
        return true
    }

}


class SourceData {
    constructor(state) { // state is redux root state
        this._src = state.get('src', ImmJS.fromJS({}))
    }

    fields() {
        const l = []
        const s = this._src.get('schema', ImmJS.fromJS([]))
        const fv = this._src.get('fieldVals', ImmJS.fromJS({}))
        return s.map(it => new FieldDescr(it, fv))
    }


    hasField(fieldName) {
        return listHas(this.fields(), it => it.name === fieldName)
    }

    field(fieldName) {
        return this.fields().find(it => it.name === fieldName)
    }

    validFieldPart(fieldPart) {
        return listHas(this.fields(), it => it.name.startsWith(fieldPart))
    }

    variantsForFieldPart(fieldPart) {
        return this.fields().filter(it => it.name.startsWith(fieldPart)).map(it => it.name).toJS()
    }

    get data() {
        return this._src.get('dataset', ImmJS.fromJS([]))
    }
}


export {SourceData}