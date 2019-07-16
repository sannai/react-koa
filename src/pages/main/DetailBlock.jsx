import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    padding: 2vw;
`;
const MyTitle = styled.div`
    width: 100%;
    font-size: 8vw;
    color: #2e3135;
    font-weight: 600;
    margin: 2vw 0;
`;
const MyKnow = styled.div``;
const MyTag = styled.span`
    font-weight: 700;
    font-size: 4vw;
    color: #b2bac2;
    margin-right: 2vw;
`;
const MyImgWrap = styled.div`
    img {
        width: 100%;
    }
`;
const MyInfoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vw;
    color: #b2bac2;
    font-weight: 700;
    font-size: 4vw;
`;
const MyTime = styled.div``;
const MyLeft = styled.div`
    display: flex;
    align-items: center;
`;
const MyComment = styled.div``;
const MyRead = styled.div``;

function DetailBlock(props) {
    const [shouldFetchData, setShouldFetchData] = useState(true);
    console.log(props);
    return (
        <Container>
            <MyTitle>{props.title}</MyTitle>
            <MyKnow>
                <MyTag>javascript</MyTag>
                <MyTag>html</MyTag>
            </MyKnow>
            <MyImgWrap dangerouslySetInnerHTML={{ __html: props.introduction }} />
            <MyInfoWrap>
                <MyLeft>
                    <MyTime>{props.createDate.slice(0, 10)}&nbsp;&nbsp;</MyTime>
                    <MyComment>评论：{props.readNumber}</MyComment>
                </MyLeft>
                <MyRead>阅读文章</MyRead>
            </MyInfoWrap>
        </Container>
    );
}

export default DetailBlock;
