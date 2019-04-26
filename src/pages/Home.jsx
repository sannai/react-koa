import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux'

const Container = styled.ul`
    width: 100%;
`
const MyLi = styled.li`
    margin-bottom: 3vw;
    background-color: #fff;
    box-shadow: 0 0.4vw 0.8vw rgba(26, 26, 26, 0.1);
    padding: 3vw 4.5vw;
    h2 {
        font-size: 5vw;
    }
    img {
        width: 100%;
        height: 30vw;
    }
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
            {props.homeListData.data &&
                props.homeListData.data.map(item => (
                    <MyLi key={item._id}>
                        <h2>{item.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.introduction }} />
                        <div>
                            <span>创建{item.createDate.slice(0, 10)}</span>
                            <span>评论{item.commentNumber}</span>
                            <span>阅读{item.readNumber}</span>
                        </div>
                    </MyLi>
                ))}
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
