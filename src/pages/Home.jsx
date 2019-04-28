import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux'

const Container = styled.main`
    width: 100%;
`
const MyUl = styled.ul``
const MyLi = styled.li`
    margin-bottom: 3vw;
    background-color: #fff;
    box-shadow: 0 0.4vw 0.8vw rgba(26, 26, 26, 0.1);
    padding: 3vw 4.5vw;
    h2 {
        font-size: 4.35vw;
        color: #1a1a1a;
    }
`
const MyAnalysiHtml = styled.div`
    margin: 2vw 0;
    img {
        width: 100%;
        height: 30vw;
    }
`
const MyAction = styled.div`
    font-size: 14px;
`

function Home(props) {
    useEffect(() => {
        if (!props.isHomeListReady && !props.isHomeList) {
            let data = {
                keyWord: '',
                page: 1,
                limit: 10,
            }
            props.homeList(data)
        }
    }, [props])
    return (
        <Container>
            <MyUl>
                {props.homeListData.data &&
                    props.homeListData.data.map(item => (
                        <MyLi key={item._id}>
                            <h2>{item.title}</h2>
                            <MyAnalysiHtml dangerouslySetInnerHTML={{ __html: item.introduction }} />
                            <MyAction>
                                <span>创建{item.createDate.slice(0, 10)}</span>
                                <span>评论{item.commentNumber}</span>
                                <span>阅读{item.readNumber}</span>
                            </MyAction>
                        </MyLi>
                    ))}
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
)(Home)
