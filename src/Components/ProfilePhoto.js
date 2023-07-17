import React from 'react'
import styled from 'styled-components'
import { ProfileIcon } from '../assets/ProfileIcon'

const ProfilePhoto = () => {
    return (
        <PhotoContainer>
            <ProfileIcon width={24} height={24} />
        </PhotoContainer>
    )
}

export default ProfilePhoto

const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    border: 1px solid lightgray;
    margin: 4px;
`
