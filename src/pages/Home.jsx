import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux";

const Container = styled.main`
	width: 100%;
`;
const MyUl = styled.ul``;
const MyLi = styled.li`
	margin-bottom: 3vw;
	background-color: #fff;
	box-shadow: 0 0.4vw 0.8vw rgba(26, 26, 26, 0.1);
	padding: 3vw 4.5vw;
	h2 {
		font-size: 4.35vw;
		color: #1a1a1a;
	}
`;
const MyAnalysiHtml = styled.div`
	margin: 2vw 0;
	img {
		width: 100%;
		height: 30vw;
	}
`;
const MyAction = styled.div`
	font-size: 14px;
	color: #9e9e9e;
	display: flex;
	align-items: center;
	i {
		font-size: 18px;
	}
`;

const MyTime = styled.time`
	margin-right: 10px;
`;
const MyComment = styled.div``;

function Home(props) {
	useEffect(() => {
		if (!props.isHomeListReady && !props.isHomeList) {
			let data = {
				keyWord: "",
				page: 1,
				limit: 10,
			};
			props.homeList(data);
		}
	}, [props]);
	const handleClickJumpRoute = item => {
		console.log(item);
	};
	return (
		<Container>
			<MyUl>
				{props.homeListData.data &&
					props.homeListData.data.map(item => (
						<MyLi
							key={item._id}
							onClick={handleClickJumpRoute(item)}
						>
							<h2>{item.title}</h2>
							<MyAnalysiHtml
								dangerouslySetInnerHTML={{
									__html: item.introduction,
								}}
							/>
							<MyAction>
								<MyTime>
									<i className='iconfont icon-riqi' />
									{item.createDate.slice(0, 10)}
								</MyTime>
								<MyComment>
									<i className='iconfont icon-liuyan' />
									{item.commentNumber}
								</MyComment>
								{/* <span>
									<i className='iconfont icon-yuedu' />
									{item.readNumber}
								</span> */}
							</MyAction>
						</MyLi>
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
)(Home);
