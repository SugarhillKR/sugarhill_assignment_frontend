import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from './ProfilePhoto'
import { MoreIcon } from '../assets/MoreIcon'
import { HeartLineIcon } from '../assets/HeartLineIcon'

const Comment = ({
    memo,
    userName,
    userId,
    createdDateUtc,
    isHover,
    onMouseOver,
    onMouseOut,
}) => {
    return (
        <CommentContainer>
            <ProfilePhoto />
            <TextBox>
                <UserName>{userName}</UserName>
                <MemoText>{memo}</MemoText>
                <DateTextContainer>
                    <span>{createdDateUtc}</span>
                    <HeartLineIcon
                        width={16}
                        height={16}
                        style={{ cursor: 'pointer', marginLeft: 8 }}
                    />
                </DateTextContainer>
            </TextBox>
            <MoreIconWrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <MoreIcon width={16} height={16} />
                {isHover && (
                    <MenuWrapper>
                        <Menu>더보기1</Menu>
                        <Menu>더보기2</Menu>
                    </MenuWrapper>
                )}
            </MoreIconWrapper>
        </CommentContainer>
    )
}

export default Comment

const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid gray;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
`

const TextBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4px;
`

const UserName = styled.div`
    font-size: 8px;
`

const MemoText = styled.div`
    font-size: 14px;
`

const DateTextContainer = styled.div`
    display: flex;
    font-size: 4px;
    margin-top: 2px;
    color: gray;
`

const MoreIconWrapper = styled.div`
    margin-right: 8px;
    cursor: pointer;
`

const MenuWrapper = styled.div``

const Menu = styled.div``
