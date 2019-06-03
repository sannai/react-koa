import React, { useState, useRef, useImperativeHandle } from "react";
import styled from "styled-components";

const MyTag = styled.div`
	box-sizing: border-box;
	display: inline-block;
	height: 32px;
	margin-right: 8px;
	padding: 0 7px;
	font-size: 12px;
	white-space: nowrap;
	background: #fafafa;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	cursor: default;
	opacity: 1;
`;
const MySpan = styled.span`
	display: inline-block;
	height: 32px;
	line-height: 30px;
	margin-left: 8px;
`;
function Tag(props) {
	console.log(props.optionStyle);
	return (
		<MyTag>
			{props.icon && <i className={props.icon} onClick={props.onClose} />}
			<MySpan>{props.children}</MySpan>
		</MyTag>
	);
}

export default Tag;
