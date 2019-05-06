import React, { useState } from "react";
import styled from "styled-components";
import Radio from "../components/Radio";

const Container = styled.div`
	margin-top: 14vw;
	height: 50vw;
	background-color: #ccc;
`;

function Message() {
	const [value, setValue] = useState(1);
	const [options, setOptions] = useState([
		{
			id: 1,
			label: "苹果",
			value: 0,
			name: "fruit",
			radioId: "radioId1",
		},
		{
			id: 2,
			label: "苹果2",
			value: 1,
			name: "fruit",
			radioId: "radioId2",
		},
		{
			id: 3,
			label: "苹果3",
			value: 2,
			name: "fruit",
			radioId: "radioId3",
		},
	]);

	const handleChangeRadio = event => {
		const value = event.target.value;
		setTimeout(() => {
			setValue(value);
		}, 200);
		// setValue(event.target.value);
	};
	console.log(value);

	return (
		<Container>
			<Radio
				options={options}
				onChang={handleChangeRadio}
				value={Number(value)}
			/>
		</Container>
	);
}

export default Message;
