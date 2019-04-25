import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	top: 14vw;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(26, 26, 26, 0.65);
`;

function Dialog(props) {
	return <Container>{props.children}</Container>;
}

export default Dialog;
