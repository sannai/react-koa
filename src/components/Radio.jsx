import React from "react";
import styled from "styled-components";

const MyLabel = styled.label`
	width: 100px;
	position: relative;
	::before,
	::after {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
	}
	::before {
		width: 5vw;
		height: 5vw;
		border: 1px solid red;
	}
	&:hover::after {
	}

	input:checked + ::after {
		opacity: 1;
		box-shadow: 0 0 15px -1px #79eac5;
	}
	input {
		opacity: 0;
	}
`;
const MySpan = styled.span``;
const MyI = styled.span`
	display: inline-block;
	position: absolute;
	width: 3vw;
	height: 3vw;
	background: red;
	top: 4px;
	left: 5px;
	opacity: 1;
	border-radius: 50%;
	transition: 0.2s;
`;

function Radio(props) {
	return (
		<>
			{props.options.map(item => (
				<MyLabel key={item.id} onClick={props.onChang}>
					<input
						type='radio'
						name={item.name}
						value={item.value}
						defaultChecked={
							props.value === item.value ? "checked" : ""
						}
					/>
					{props.value === item.value && <MyI />}

					<MySpan>{item.label}</MySpan>
				</MyLabel>
			))}
		</>
	);
}

export default Radio;
