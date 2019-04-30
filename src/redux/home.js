import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { ofType, combineEpics } from 'redux-observable'
import { handleActions, createActions } from 'redux-actions'
import api from '../api'

const {
    homeList,
    homeListSuccess,
    homeListFailed,
    articleDetail,
    articleDetailSuccess,
    articleDetailFailed,
} = createActions(
    'home_list',
    'home_list_success',
    'home_list_failed',
    'article_detail',
    'article_detail_success',
    'article_detail_failed'
)
export const homeActions = {
    homeList, //首页列表
    articleDetail, //文章详情
}
// getArticleDetail
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

const articleDetailEpic = actions$ =>
    actions$.pipe(
        ofType(articleDetail),
        switchMap(action =>
            Observable.create(observer => {
                api.auth
                    .getArticleDetail(action.payload)
                    .then(res => {
                        if (res.message) {
                            observer.next(articleDetailSuccess(res.message[0]))
                        }
                    })
                    .catch(err => {
                        observer.next(articleDetailFailed())
                    })
            })
        )
    )

export const homeEpic = combineEpics(homeListEpic, articleDetailEpic)

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
        [articleDetail]: state => ({
            ...state,
            isArticleDetail: true,
            isArticleDetailReady: false,
            articleDetailData: {},
        }),
        [articleDetailSuccess]: (state, action) => ({
            ...state,
            isArticleDetailReady: true,
            isArticleDetail: false,
            articleDetailData: action.payload,
        }),
        [articleDetailFailed]: state => ({
            ...state,
            isArticleDetailReady: false,
            isArticleDetail: false,
        }),
    },
    {
        isHomeList: false,
        isHomeListReady: false,
        homeListData: [],
        isArticleDetail: false,
        isArticleDetailReady: false,
        articleDetailData: {},
    }
)
export default homeReducer
