import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const layshow = keyframes`
//     0% {
//         transform: scale(.5,.5);
//     }
//     50% {
//         transform: scale(1,1);
//     }
// `
// const layhide = keyframes`
//     50% {
//         transform: scale(1,1);
//     }
//     100% {
//         transform: scale(0,0);
//     }
// `
const Container = styled.div`
	width: 100%;
	background-color: rgba(26, 26, 26, 0.65);
	position: fixed;
	top: 14vw;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	opacity: ${props => (props.active ? "1" : "0")};
	transition: opacity 0.2s linear;
`;
const MyExpand = styled.div`
	background-color: #fff;
	transition: height 0.2s cubic-bezier(0, 0, 0.2, 1);
	height: ${props => (props.active ? "42vw" : "0vw")};
	overflow: hidden;
	a {
		width: 100%;
		height: 10vw;
		display: flex;
		align-items: center;
		color: #444;
		border-top: 1px solid #ebebeb;
		padding: 0 2vh;
		i {
			font-size: 24px;
			color: rgb(133, 144, 166);
			padding-right: 14px;
		}
	}
`;

function Dialog(props) {
	const menuList = [
		{
			routerLink: "/",
			cls: "iconfont icon-shouye",
			name: "首页",
			index: 1,
		},
		{
			routerLink: "/",
			cls: "iconfont icon-liebiao2",
			name: "文章",
			index: 2,
		},
		{
			routerLink: "/message",
			cls: "iconfont icon-liuyan",
			name: "留言",
			index: 3,
		},
		{
			routerLink: "/",
			cls: "iconfont icon-geren",
			name: "关于",
			index: 4,
		},
	];
	let bodyEl = document.body;
	let top = 0;
	if (props.isMenu) {
		top = window.scrollY;
		bodyEl.style.position = "fixed";
		bodyEl.style.top = -top + "px";
	} else {
		// bodyEl.style.position = "";
		// bodyEl.style.top = "";
		// window.scrollTo(0, top); // 回到原先的top
	}
	const [active, setActive] = useState(false);
	useEffect(() => {
		if (props.menuActive && !active) {
			setActive(true);
		} else if (!props.menuActive && active) {
			setActive(false);
		}
	}, [props.menuActive]);
	return (
		<Container active={active}>
			<MyExpand active={active}>
				{menuList.map(item => (
					<Link
						to={item.routerLink}
						onClick={props.onClick}
						key={item.index}
					>
						<i className={item.cls} />
						{item.name}
					</Link>
				))}
			</MyExpand>
		</Container>
	);
}

export default Dialog;
