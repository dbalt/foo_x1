import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import React from 'react'
import {connect} from 'react-redux'
import Imm from 'immutable'


const initialState = Imm.fromJS({})

const applyFn = (state, fn) => fn(state)
const pipe = (state, fns) => state.withMutations(s => fns.reduce(applyFn, s))


const META = 101 //why not ?
const _ACTION_DEL = 'del'
const _ACTION_SET = 'set'

const reducer = (state = initialState, payload) => {

    if (payload.meta === META) {
        let fns = payload.muts.map(m => {

            if (m.tp === _ACTION_DEL)
                return s => s.deleteIn(m.path)

            if (m.tp === _ACTION_SET)
                return s => s.setIn(m.path, Imm.fromJS(m.data))

            return s => s
        })
        return pipe(state, fns)
    }

    return state
}


const store = createStore(reducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));

class ActionBuilder {
    constructor(type) {
        this._type = type
        this._muts = []
    }

    static _path(p) {
        return Array.isArray(p) ? p : [p]
    }

    set(path, data) {
        this._muts.push({
            tp: _ACTION_SET,
            path: ActionBuilder._path(path),
            data,
        })
        return this
    }

    del(path) {
        this._muts.push({
            tp: _ACTION_DEL,
            path: ActionBuilder._path(path),
        })
        return this
    }

    clear() {
        this._muts.length = 0
        return this
    }


    apply(fn) {
        fn(this)
        return this
    }

    dispatch() {
        let action = {
            type: this._type,
            meta: META,
            muts: [...this._muts]
        }
        this.clear()
        store.dispatch(action)
    }
}

const act = tp => new ActionBuilder(tp)
const currentState = () => store.getState()


class ComponentConstructor {
    constructor(view = null, stp = null, mount = null, umount = null) {
        this.view = view //stateless component
        this.stp = stp
        this.mount = mount
        this.umount = umount
    }


    setView(fn) {
        this.view = fn
        return this
    }

    setStp(fn) {
        this.stp = fn
        return this
    }

    setMount(fn) {
        this.mount = fn
        return this
    }

    setUmount(fn) {
        this.umount = fn
        return this
    }


    static _is_fn(fn) {
        return fn !== null && typeof(fn) === 'function'
    }

    make() {

        const out = this

        const cls = class Wrapped extends React.Component {
            constructor(props) {
                super(props)
            }

            componentDidMount() {
                const fn = out.mount
                if (ComponentConstructor._is_fn(fn)) fn(this.props)
            }

            componentWillUnmount() {
                const fn = out.umount
                if (ComponentConstructor._is_fn(fn)) fn(this.props)
            }

            render() {
                const V = out.view
                return <V {...this.props}/>
            }
        }

        const stp = ComponentConstructor._is_fn(out.stp) ? out.stp : (s, p) => p
        return connect(stp)(cls)
    }
}


const wrap = (view, stp, mount, umount) => {
    const c = new ComponentConstructor(view, stp, mount, umount)
    return c.make()
}

const make_cmp = (view, stp, mount, umount) => new ComponentConstructor(view, stp, mount, umount)


export {store, currentState, act, wrap, make_cmp, pipe, applyFn}