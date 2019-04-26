import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { ofType, combineEpics } from 'redux-observable'
import { handleActions, createActions } from 'redux-actions'
import api from '../api'

const { homeList, homeListSuccess, homeListFailed } = createActions(
    'home_list',
    'home_list_success',
    'home_list_failed'
)
export const homeActions = {
    homeList,
}

const homeListEpic = actions$ =>
    actions$.pipe(
        ofType(homeList),
        switchMap(action =>
            Observable.create(observer => {
                api.auth
                    .HomeList(action.payload)
                    .then(res => {
                        if (res.message) {
                            observer.next(homeListSuccess(res.message))
                        }
                    })
                    .catch(err => {
                        observer.next(homeListFailed())
                    })
            })
        )
    )

export const homeEpic = combineEpics(homeListEpic)

const homeReducer = handleActions(
    {
        [homeList]: state => ({
            ...state,
            isHomeList: true,
        }),
        [homeListSuccess]: (state, action) => ({
            ...state,
            isHomeListReady: true,
            isHomeList: false,
            homeListData: action.payload,
        }),
    },
    {
        isHomeList: false,
        isHomeListReady: false,
        homeListData: [],
    }
)
export default homeReducer
