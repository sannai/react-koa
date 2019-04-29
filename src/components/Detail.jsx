import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux";

const Container = styled.section`
	width: 100%;
	height: 10vw;
	font-size: 5vw;
	background-color: #fff;
`;
const MyUl = styled.ul``;
const MyLl = styled.li``;
const MyAnalysiHtml = styled.div`
	word-break: break-word;
	margin: 2vw 0;
	img {
		width: 100%;
		height: 30vw;
	}
`;
function Detail(props, state) {
	console.log(props, state);
	useEffect(() => {
		if (props.match.params.id) {
			let data = {
				page: 1,
				limit: 10,
			};
			props.articleDetail(props.match.params.id, data);
		}
	}, [props]);
	return (
		<Container>
			<MyUl>
				{props.articleDetailData &&
					props.articleDetailData.map(item => (
						<MyLl key={item._id}>
							<h2>{item.title}</h2>
							<time>{item.createDate.slice(0, 10)}</time>
							<time>{item.readNumber}</time>
							<MyAnalysiHtml
								dangerouslySetInnerHTML={{
									__html: item.introduction,
								}}
							/>
							<MyAnalysiHtml
								dangerouslySetInnerHTML={{
									__html: item.content,
								}}
							/>
						</MyLl>
					))}
			</MyUl>
		</Container>
	);
}

const mapStateToProps = state => {
	return state.home;
};
const mapDispatchToProps = dispatch =>
	bindActionCreators(actions.home, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail);
