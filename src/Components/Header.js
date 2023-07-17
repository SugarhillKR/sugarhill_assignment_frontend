import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return <CustomHeder>슈가힐 프론트엔드 라이브 코딩 테스트</CustomHeder>
}

const CustomHeder = styled.div`
    display: flex;
    align-items: center;
    padding-left: 24px;
    height: 64px;
    font-weight: 600;
    background-color: white;
    border-bottom: 1px solid gray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export default Header
