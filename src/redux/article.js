import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { ofType, combineEpics } from "redux-observable";
import { handleActions, createActions } from "redux-actions";
import api from "../api";

const {
    getArticleList,
    getArticleListSuccess,
    getArticleListFailed,
    getArticleDetail,
    getArticleDetailSuccess,
    getArticleDetailFailed,
} = createActions(
    "get_article_list",
    "get_article_list_success",
    "get_article_list_failed",
    "get_article_detail",
    "get_article_detail_success",
    "get_article_detail_failed"
);
export const articleActions = {
    getArticleList, //首页列表
    getArticleDetail, //文章详情
};

const getArticleListEpic = actions$ =>
    actions$.pipe(
        ofType(getArticleList),
        switchMap(action =>
            Observable.create(observer => {
                api.article
                    .getArticleList(action.payload)
                    .then(res => {
                        if (res.message) {
                            observer.next(getArticleListSuccess(res.message));
                        }
                    })
                    .catch(err => {
                        observer.next(getArticleListFailed());
                    });
            })
        )
    );

const getArticleDetailEpic = actions$ =>
    actions$.pipe(
        ofType(getArticleDetail),
        switchMap(action =>
            Observable.create(observer => {
                api.article
                    .getArticleDetail(action.payload)
                    .then(res => {
                        if (res.message) {
                            observer.next(getArticleDetailSuccess(res.message[0]));
                        }
                    })
                    .catch(err => {
                        observer.next(getArticleDetailFailed());
                    });
            })
        )
    );

export const articleEpic = combineEpics(getArticleListEpic, getArticleDetailEpic);

const articleReducer = handleActions(
    {
        [getArticleList]: state => ({
            ...state,
            isgetArticleList: true,
        }),
        [getArticleListSuccess]: (state, action) => ({
            ...state,
            isgetArticleListReady: true,
            isgetArticleList: false,
            getArticleListData: action.payload,
        }),
        [getArticleDetail]: state => ({
            ...state,
            isgetArticleDetail: true,
            isgetArticleDetailReady: false,
            getArticleDetailData: {},
        }),
        [getArticleDetailSuccess]: (state, action) => ({
            ...state,
            isgetArticleDetailReady: true,
            isgetArticleDetail: false,
            getArticleDetailData: action.payload,
        }),
        [getArticleDetailFailed]: state => ({
            ...state,
            isgetArticleDetailReady: false,
            isgetArticleDetail: false,
        }),
    },
    {
        isgetArticleList: false,
        isgetArticleListReady: false,
        getArticleListData: {},
        isgetArticleDetail: false,
        isgetArticleDetailReady: false,
        getArticleDetailData: {},
    }
);
export default articleReducer;
