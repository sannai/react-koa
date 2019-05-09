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
			value: "0",
			radioId: "radioId1",
		},
		{
			id: 2,
			label: "香蕉",
			value: 1,
			name: "fruit",
			value: "1",
			radioId: "radioId2",
		},
		{
			id: 3,
			label: "雪梨",
			value: 2,
			name: "fruit",
			value: "2",
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
	const handleChangeInput = (event, value) => {
		// let option = options.map(item => {
		// 	if (item.radioId === value.radioId) {
		// 		item.value = event.target.value;
		// 	}
		// 	return item;
		// });
		// setOptions(option);
		setOptions(state => {
			return state.map(item => {
				if (item.radioId === value.radioId) {
					item.value = event.target.value;
				}
				return item;
			});
		});
		// let option = options.map(item => {
		// 	if (item.radioId === value.radioId) {
		// 		item.value = event.target.value;
		// 	}
		// 	return item;
		// });
		// setOptions(option);
		// console.log(option, event.target.value, value);
	};
	console.log(options);

	return (
		<Container>
			{/* <Radio
				options={options}
				onChang={handleChangeRadio}
				value={Number(value)}
			/> */}
			{options.map(item => (
				<div key={item.id}>
					<input
						type='text'
						value={item.value}
						onChange={() => handleChangeInput(event, item)}
					/>
				</div>
			))}
		</Container>
	);
}

export default Message;
