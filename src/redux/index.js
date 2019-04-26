import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import home, { homeEpic, homeActions } from './home'

export const rootEpic = combineEpics(homeEpic)

export const actions = {
    home: homeActions,
}

export const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        home,
    })
