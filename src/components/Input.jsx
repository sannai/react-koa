import React, {
	useState,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react";
import styled from "styled-components";

const MyInput = styled.input``;
function Input(props) {
	console.log(props.optionStyle, 61);
	return (
		<MyInput type='text' value={props.value} onChange={props.onChange} />
	);
}

export default Input;
