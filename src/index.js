import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { rootReducer } from './redux'
import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'

import App from './App'

const loggerMiddleware = createLogger({
    collapsed: true,
})
const history = createBrowserHistory()
const epicMiddleware = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore() {
    const store = createStore(
        rootReducer(history),
        composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware, loggerMiddleware))
    )
    return store
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
