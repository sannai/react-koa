import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux'

const Container = styled.section`
    margin-top: 14vw;
    width: 100%;
    height: 10vw;
    font-size: 5vw;
    background-color: #fff;
`
const MyUl = styled.ul``
const MyLl = styled.li``
const MyAnalysiHtml = styled.div`
    word-break: break-word;
    margin: 2vw 0;
    img {
        width: 100%;
        height: 30vw;
    }
`
function Detail(props) {
    useEffect(() => {
        let data = {
            page: 1,
            limit: 10,
        }
        if (!props.isArticleDetailReady && !props.isArticleDetail) {
            props.articleDetail(props.match.params.id, data)
        } else if (props.articleDetailData['_id'] !== props.match.params.id) {
            props.articleDetail(props.match.params.id, data)
        }
    }, [props.isArticleDetailReady, props.isArticleDetail])
    return (
        <Container>
            <MyUl>
                {props.isArticleDetail ? (
                    'loading'
                ) : (
                    <MyLl key={props.articleDetailData._id}>
                        <h2>{props.articleDetailData.title}</h2>
                        <time>
                            {props.articleDetailData.createDate && props.articleDetailData.createDate.slice(0, 10)}
                        </time>
                        <br />
                        <time>{props.articleDetailData.readNumber}</time>
                        <MyAnalysiHtml
                            dangerouslySetInnerHTML={{
                                __html: props.articleDetailData.introduction,
                            }}
                        />
                        <MyAnalysiHtml
                            dangerouslySetInnerHTML={{
                                __html: props.articleDetailData.content,
                            }}
                        />
                    </MyLl>
                )}
            </MyUl>
        </Container>
    )
}

const mapStateToProps = state => {
    return state.home
}
const mapDispatchToProps = dispatch => bindActionCreators(actions.home, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)
