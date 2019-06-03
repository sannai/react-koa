import React, {
	useState,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react";
import styled from "styled-components";

const MyButton = styled.button`
	box-sizing: border-box;
	display: inline-block;
	height: 32px;
	text-align: center;
	border: 1px solid border;
	border-radius: 8px;
	font-size: 12px;
	font-family: MicrosoftYaHei;
	font-weight: 500;
	color: ${props =>
		props.disabled
			? "rgba(0,0,0,0.25)"
			: props.optionStyle
			? props.optionStyle.color
			: "#fff"};
	background-color: ${props =>
		props.disabled
			? "rgba(0,0,0,0.25)"
			: props.optionStyle
			? props.optionStyle.bgColor
			: "#3E99E6"};
	border-color: ${props =>
		props.disabled
			? "rgba(0,0,0,0.25)"
			: props.optionStyle
			? props.optionStyle.borderColor
			: "#3E99E6"};
	cursor: ${props =>
		props.disabled
			? "not-allowed"
			: props.optionStyle
			? props.optionStyle.cursor
			: "auto"};

	:hover {
		color: ${props =>
			props.disabled
				? "rgba(0,0,0,0.25)"
				: props.optionStyle
				? props.optionStyle.Hcolor
				: "#fff"};
		background-color: ${props =>
			props.disabled
				? "rgba(0,0,0,0.25)"
				: props.optionStyle
				? props.optionStyle.HbgColor
				: "#3E99E6"};
		border-color: ${props =>
			props.disabled
				? "rgba(0,0,0,0.25)"
				: props.optionStyle
				? props.optionStyle.HborderColor
				: "#3E99E6"};
	}
	&:first-of-type {
		margin-left: 0;
	}
`;
const MySpan = styled.span`
	margin-left: 8px;
`;
function Button(props, ref) {
	console.log(props.optionStyle, ref, 6);
	return (
		<MyButton
			optionStyle={props.optionStyle}
			type='button'
			ref={ref}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.icon && <i className={props.icon} />}
			<MySpan>{props.children}</MySpan>
		</MyButton>
	);
}

export default forwardRef(Button);
