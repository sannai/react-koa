import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	position: relative;
	input:checked + label::after {
		background-color: #1890ff;
	}
`;
const MyInput = styled.input`
	display: none;
`;
const MyLabel = styled.label`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	position: relative;
`;
const MyLabel1 = styled.label`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	&::after {
		box-sizing: border-box;
		transition: all 0.5s ease;
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		left: 8px;
		z-index: 1;
		content: "";
	}
`;
const MyI = styled.i`
	display: flex;
	border: 1px solid #d9d9d9;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	cursor: pointer;
	:active {
		border-color: red;
	}
`;
const MySpan = styled.span``;

function Radio(props) {
	return (
		<Container>
			{props.options.map(item => (
				<MyLabel key={item.id} onClick={props.onChang}>
					<MyInput
						type='radio'
						name={item.name}
						value={item.value}
						id={item.radioId}
						defaultChecked={
							props.value === item.value ? "checked" : ""
						}
					/>
					<MyLabel1 for={item.radioId}>
						<MyI />
						<MySpan>{item.label}</MySpan>
					</MyLabel1>
				</MyLabel>
			))}
		</Container>
	);
}

export default Radio;
