import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Dialog from "./Dialog";

const Container = styled.header`
    width: 100%;
    height: 12vw;
    position: fixed;
    top: 0;
    font-size: 4vw;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 1px 3px 0 rgba(23, 81, 153, 0.05);
`;
const MyUl = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Myli = styled.li`
    text-align: center;
`;
const Myli1 = styled(Myli)`
    width: 12vw;
`;
const Myli2 = styled(Myli)`
    flex: 1;
    text-align: center;
`;
const MyInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    display: inline-block;
    border: 1px solid hsla(0, 0%, 59.2%, 0.2);
    height: 8vw;
    padding-left: 10px;
    font-size: 3vw;
`;
const Myli3 = styled(Myli)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 100%;
    i {
        font-size: 8vw;
        color: #8590a6;
    }
`;

const MyH1 = styled.h1`
    font-size: 4vw;
    color: #0084ff;
`;

function Header(props) {
    const [menuActive, setMenuActive] = useState(false);
    const [shadowActive, setShadowActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const handleClickmeun = () => {
        if (shadowActive) {
            setMenuActive(false);
            setTimeout(() => {
                setShadowActive(false);
            }, 200);
        } else {
            setShadowActive(true);
            setMenuActive(true);
        }
    };

    const handleChangeSearch = event => {
        let data = {
            keyword: event.target.value,
            page: 1,
            limit: 10,
        };
        setSearchValue(event.target.value);
        props.getArticleList(data);
    };
    return (
        <Container>
            <MyUl>
                <Myli1>
                    <MyH1>
                        <Link to='/'>蜗牛</Link>
                    </MyH1>
                </Myli1>
                <Myli2>
                    <MyInput type='text' value={searchValue} onChange={handleChangeSearch} placeholder='搜索文章' />
                </Myli2>
                <Myli3 onClick={handleClickmeun}>
                    {shadowActive ? <i className='iconfont icon-cuo' /> : <i className='iconfont icon-caidan' />}
                </Myli3>
            </MyUl>
            {shadowActive ? <Dialog menuActive={menuActive} onClick={handleClickmeun} /> : null}
        </Container>
    );
}

const mapStateToProps = state => {
    return state.article;
};
const mapDispatchToProps = dispatch => bindActionCreators({ getArticleList: actions.article.getArticleList }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
