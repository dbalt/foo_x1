import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import RootView from './app/root'
import {Provider} from 'react-redux'

import {store} from "./boilerplate";
import './css/index.scss'

const rootComponent = (
    <Provider store={store}>
        <RootView/>
    </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'));

