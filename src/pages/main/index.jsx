import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux";
import { Link } from "react-router-dom";
import DetailBlock from "./DetailBlock";

const Container = styled.main`
    padding-top: 12vw;
    width: 100%;
    height: calc(100% - 12vw);
`;

function Main(props) {
    const [shouldFetchData, setShouldFetchData] = useState(true);
    useEffect(() => {
        if (shouldFetchData) {
            setShouldFetchData(false);
            let data = {
                page: 1,
                limit: 10,
            };
            props.getArticleList(data);
        }
    }, [shouldFetchData]);
    console.log(props.getArticleListData);
    return (
        <Container>
            {props.getArticleListData.data &&
                props.getArticleListData.data.map((item, index) => (
                    <Link to={"/article/" + item._id} key={index}>
                        <DetailBlock {...item} />
                    </Link>
                ))}
        </Container>
    );
}
const mapStateToProps = state => {
    return state.article;
};
const mapDispatchToProps = dispatch => bindActionCreators(actions.article, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
