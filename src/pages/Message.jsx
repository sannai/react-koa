import React, {
	useState,
	useRef,
	useImperativeHandle,
	forwardedRef,
} from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Tag from "../components/Tag";
import Input from "../components/Input";

const Container = styled.div`
	margin-top: 14vw;
	height: 50vw;
	background-color: #ccc;
`;

function Message() {
	const [options, setOptions] = useState([
		{
			id: 1,
			label: "苹果",
			value: 0,
			name: "fruit",
			value: "0",
			radioId: "radioId1",
			type: "text",
			disabled: true,
		},
		{
			id: 2,
			label: "香蕉",
			value: 1,
			name: "fruit",
			value: "1",
			radioId: "radioId2",
			type: "number",
			disabled: false,
			icon: "fas fa-angle-double-left",
		},
		{
			id: 3,
			label: "雪梨",
			value: 2,
			name: "fruit",
			value: "2",
			radioId: "radioId3",
			type: "number",
			disabled: false,
			icon: "fas fa-angle-double-right",
		},
	]);
	const [inputData, setInputData] = useState({
		fruit: "fruit",
		radioId: "radioId",
	});
	const buttonRef = useRef(null);
	const handleClick = (event, item, index) => {
		console.log(event, item, index, buttonRef.current);
	};
	const handleChange = (event, name) => {
		console.log(event.target.value, name, 66);
		const val = event.target.value;
		// setInputData(state => ({
		// 	...state,
		// 	[name]: val,
		// }));
		setInputData({
			...inputData,
			[name]: event.target.value,
		});
	};
	console.log(inputData, 666);
	const optionStyle = {
		height: "32px",
		color: "#fff",
		bgColor: "#F27A59",
		borderColor: "#F27A59",
		family: "MicrosoftYaHei",
		weight: "Regular",
		size: "14px",
		cursor: "pointer",
		Hcolor: "#fff",
		HbgColor: "#F27A59",
		HborderColor: "#F27A59",
	};
	return (
		<Container>
			{options.map((item, index) => (
				<Button
					optionStyle={optionStyle}
					icon={item.icon}
					disabled={item.disabled}
					onClick={event => handleClick(event, item, index)}
					key={item.id}
				>
					{item.label}
				</Button>
			))}
			<Button
				ref={buttonRef}
				icon={"fas fa-angle-double-right"}
				onClick={event => handleClick(event, "添加", 60)}
			>
				添加
			</Button>
			<Button
				disabled={true}
				onClick={event => handleClick(event, "取消", 1)}
			>
				取消
			</Button>
			{options.map((item, index) => (
				<Button
					icon={item.icon}
					disabled={item.disabled}
					onClick={event => handleClick(event, item, index)}
					key={item.id}
				>
					{item.label}
				</Button>
			))}
			<Tag onClose={event => handleClick(event, "我是标签", 1)}>
				Tag666
			</Tag>
			<Tag
				icon={"fas fa-angle-double-right"}
				onClose={event => handleClick(event, "我是tag", 1)}
			>
				Tag666
			</Tag>
			<Input
				value={inputData.fruit}
				onChange={event => handleChange(event, "fruit")}
			/>
			<Input
				value={inputData.radioId}
				onChange={event => handleChange(event, "radioId")}
			/>
			{/* {options.map((item, index) => (
				<Input
					key={item.id}
					value={item.label}
					onChange={event => handleChange(event, item.radioId)}
				/>
			))} */}
		</Container>
	);
}

export default Message;
