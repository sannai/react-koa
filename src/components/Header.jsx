/* eslint-disable no-undef */
import React, { useState } from 'react'
import styled from 'styled-components'
import Dialog from './Dialog'

const Container = styled.header`
    width: 100%;
    height: 14vw;
    font-size: 4vw;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 1px 3px 0 rgba(23, 81, 153, 0.05);
`
const MyUl = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Myli = styled.li`
    text-align: center;
`
const Myli1 = styled(Myli)`
    width: 20vw;
    h1 {
        font-size: 6vw;
        color: #0084ff;
    }
`
const Myli2 = styled(Myli)`
    flex: 1;
    text-align: center;
    input {
        box-sizing: border-box;
        width: 100%;
        display: inline-block;
        border: 1px solid hsla(0, 0%, 59.2%, 0.2);
        height: 8vw;
        padding-left: 10px;
    }
`
const Myli3 = styled(Myli)`
    width: 15vw;
    i {
        font-size: 8vw;
        color: #8590a6;
    }
`

function Header() {
    const [isMenu, setIsMenu] = useState('')
    function handleClickmeun() {
        setIsMenu(!isMenu)
        console.log(isMenu, 66)
    }
    return (
        <Container>
            <MyUl>
                <Myli1>
                    <h1>蜗牛</h1>
                </Myli1>
                <Myli2>
                    <input type='text' placeholder='搜索' />
                </Myli2>
                <Myli3 onClick={handleClickmeun}>
                    {isMenu ? <i className='iconfont icon-cuo' /> : <i className='iconfont icon-caidan' />}
                </Myli3>
            </MyUl>
            <Dialog isMenu={isMenu} onClick={handleClickmeun} />
        </Container>
    )
}

export default Header
