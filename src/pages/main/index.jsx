import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux";
import { Link } from "react-router-dom";

const Container = styled.main`
    margin-top: 12vw;
    width: 100%;
    height: calc(100%);
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

    return <Container>123</Container>;
}
const mapStateToProps = state => {
    return state.article;
};
const mapDispatchToProps = dispatch => bindActionCreators(actions.article, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
