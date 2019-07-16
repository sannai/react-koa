import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../redux";
import { Link } from "react-router-dom";

const Container = styled.main`
    padding-top: 12vw;
    width: 100%;
    height: calc(100% - 12vw);
`;

function Detail(props) {
    const [shouldFetchData, setShouldFetchData] = useState(true);
    useEffect(() => {
        if (shouldFetchData) {
            setShouldFetchData(false);

            props.getArticleDetail(props.match.params.id);
        }
    }, [shouldFetchData]);
    console.log(props);
    return (
        <Container>
            {props.getArticleListData.data &&
                props.getArticleListData.data.map((item, index) => (
                    <Link to={"/article/" + item._id} key={index}>
                        666
                    </Link>
                ))}
        </Container>
    );
}
const mapStateToProps = state => {
    return state.article;
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getArticleDetail: actions.article.getArticleDetail }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
