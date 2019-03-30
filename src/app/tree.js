class UnitField {
    constructor(unit, data = {}) {
        this.unit = unit
        this.name = data.name
        this.tp = data.tp
        this.valid = data.valid || false
        this.complete = data.complete || false
        this.variants = data.variants || []
    }

    check(sourceData) {
        sourceData = new SourceData(null)
        if (sourceData.hasField(this.name)) {
            this.valid = true
            this.complete = true
            this.variants = []
            this.tp = sourceData.field(this.name).tp
            return
        }

        if (sourceData.validFieldPart(this.name)) {
            this.valid = true
            this.complete = false
            this.variants = sourceData.variantsForFieldPart(this.name)
            this.tp = null
            return
        }

        this.valid = false
        this.complete = false
        this.variants = []
        this.tp = null
    }

    setName(name, sourceData) {
        this.name = name
        this.check(sourceData)
    }

    get hasTp() {
        return this.tp != null
    }

    toObj() {
        return {
            name: this.name,
            tp: this.tp,
            valid: this.valid,
            complete: this.complete,
            variants: this.variants
        }
    }
}

class UnitOperator {
    constructor(unit, data = {}) {
        this._unit = unit
        this.val = data.val
    }

    get requireList() {
        return this.val == 'in' || this.val == 'not in'
    }

    set(op) {
        this.val = op
    }

    toObj() {
        return {
            val: this.val,
            requireList: this.requireList,
        }
    }
}

class UnitValue {
    constructor(unit, data = {}) {
        this._unit = unit
        this.value = data.value
        this._variants = data.variants || []
        this._complete = data.complete || false
        this._valid = data.valid || false

        if (this.isLst) {
            this.value = this.value.map(it => new UnitValue(this._unit, (typeof it === 'string') ? {value: it} : it))
        }
    }

    get complete() {
        return this.isLst ? this.value.reduce((acc, it) => acc && it.complete, true) : this._complete
    }

    get valid() {
        return this.isLst ? this.value.reduce((acc, it) => acc && it.valid, true) : this._valid
    }

    get isLst() {
        return Array.isArray(this.value)
    }

    toObj() {
        return {
            value: this.isLst ? this.value.map(it => it.toObj()) : this.value,
            variants: this.isLst ? [] : this.variants,
            valid: this.valid,
            complete: this.complete,
            isLst: this.isLst,
        }
    }

    _invalidate() {
        this._complete = true
        this._valid = false
        this._variants.length = 0
    }


    check(sourceData) {
        if (this.isLst) {
            this.value.forEach(it => it.check(sourceData))
            return
        }


        const f = sourceData.field(this._unit.field)
        if (f == null) {
            this._invalidate()
            return
        }

        this._complete = f.isComplete(this.value)
        this._valid = f.isValid(this.value)
    }


    match(val) {

        // тут может быть всякая штука
        const op = this._unit.op.val
        if (this.isLst) {
            // либо in либо not in
            const hasVal = this.value.map(it => it.value).includes(val)
            return op == 'in' ? hasVal : !hasVal
        }

        const tp = this._unit.field.tp
        const v = this.value
        if (tp == Tps.int) {
            if (op == '>') return val > v
            if (op == '>=') return val >= v
            if (op == '<=') return val <= v
            if (op == '<') return val < v
        }

        if (op == '=') return val = v
        if (op == '!=') return val != v

        return false // default
    }
}


const makeTree = t => {
    if (t.tp == 'logical_operation') return new TreeNodeExpr(t)
    return new TreeNodeUnit(t)
}


const fn_fieldData = data => {
    if (!('field' in data)) return {}
    const f = data.field
    return (typeof f === 'string') ? {name: f} : f
}

const fn_opData = data => {
    if (!('op' in data)) return {}
    return (typeof o === 'string') ? {val: o} : o
}

const fn_valData = data => {
    if (!('val' in data)) return {}
    const v = data.val
    const is_str = (typeof v === 'string')
    const is_arr = Array.isArray(v)
    const d = (is_str || is_arr) ? {value: v} : v
    return d
}


class TreeNodeBase {
    constructor() {

    }

    get root() {
        if (self._parent == null) return this
        return self._parent.root
    }
}

class TreeNodeUnit extends TreeNodeBase {
    constructor(data, path = [], parent = null) {
        super()
        this._parent = parent
        this.path = path

        this.field = new UnitField(this, fn_fieldData(data))
        this.op = new UnitOperator(this, fn_opData(data))
        this.val = new UnitValue(this, fn_valData(data))
    }

    get tp() {
        return 'unit'
    }

    get complete() {
        return this.field.complete && this.val.complete
    }

    get valid() {
        return this.field.valid && this.val.valid
    }

    match(val) {
        return this.val.match(val)
    }

    toObj() {
        return {
            field: this.field.toObj(),
            op: this.op.toObj(),
            val: this.value.toObj(),
        }
    }

    check(sourceData) {
        this.field.check(sourceData)
        this.val.check(sourceData)
    }
}


class TreeNodeExpr extends TreeNodeBase {
    constructor(data, path = [], parent = null) {
        super()
        this._parent = parent
        this.path = path

        if ('left' in data) this.makeLeftExpr(data.left)
        if ('right' in data) this.makeRightExpr(data.right)

        this.left = data.left
        this.right = data.right
        this.opr = data.opr
        this.path = parent == null ? [] : [...parent.path,]
    }

    get tp() {
        return "logical_operator"
    }

    get complete() {
        return this.left.complete && this.right.complete
    }

    get valid() {
        return this.left.valid && this.right.valid
    }

    oprFunc(arg1, arg2) {
        if (this.opr == 'and') return arg1 && arg2
        if (this.opr == 'or') return arg1 || arg2
        return false
    }

    match(val) {
        return this.oprFunc(this.left.match(val), this.right.match(val))
    }

    toObj() {
        return {
            left: this.left.toObj(),
            right: this.right.toObj(),
            opr: this.opr,
        }
    }

    makeLeft(data = {}) {
        return data.tp === 'logical_operation'
            ? this.makeLeftExpr(data)
            : this.makeLeftUnit(data)
    }

    makeLeftExpr(data = {}) {
        const node = new TreeNodeExpr(data, [...this.path, 'left'], this)
        this.left = node
        return node
    }

    makeLeftUnit(data) {
        const node = new TreeNodeUnit(data, [...this.path, 'left'], this)
        this.left = node
        return node
    }


    makeRight(data = {}) {
        return data.tp === 'logical_operation'
            ? this.makeRightExpr(data)
            : this.makeRightUnit(data)
    }

    makeRightExpr(data = {}) {
        const node = new TreeNodeExpr(data, [...this.path, 'right'], this)
        this.right = node
        return node
    }

    makeRightUnit(data = {}) {
        const node = new TreeNodeUnit(data, [...this.path, 'right'], this)
        this.right = node
        return node
    }

    check(sourceData) {
        this.left.check(sourceData)
        this.right.check(sourceData)
    }

    canBeEditedInGUI() {
        let res = true
        const fs = new Set()

        const visitor = node => {
            // if(node.tp == 'logical_operation')
        }

    }


}


export {TreeNodeExpr, TreeNodeUnit, UnitField, UnitOperator, UnitValue, makeTree}