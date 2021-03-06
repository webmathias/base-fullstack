import React from 'react'
import AppRouter from '../../router/AppRouter'
import {createStore, applyMiddleware,} from 'redux'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'
import appReducers from './appReducers'
import './App.css'

let store = applyMiddleware(promiseMiddleware())(createStore)(appReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

export default App