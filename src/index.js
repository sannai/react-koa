import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { rootEpic, rootReducer } from "./redux";
import { createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware, compose } from "redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const loggerMiddleware = createLogger({
    collapsed: true,
});
const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        height: 100%;
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    ul{
        padding: 0;
        margin: 0;
    }
    li{
        list-style-type: none
    }
`;
function configureStore() {
    const store = createStore(
        rootReducer(history),
        composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware, loggerMiddleware))
    );
    epicMiddleware.run(rootEpic);
    return store;
}

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App />
            <GlobalStyle />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
