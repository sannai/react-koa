import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import article, { articleEpic, articleActions } from "./article";

export const rootEpic = combineEpics(articleEpic);

export const actions = {
    article: articleActions,
};

export const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        article,
    });
