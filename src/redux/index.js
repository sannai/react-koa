import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
    })
