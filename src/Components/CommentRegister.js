import React from 'react'
import styled from 'styled-components'
import ReactTextareaAutosize from 'react-textarea-autosize'
import Button from './Button'

const CommentRegister = ({
    value,
    onChange,
    placeholder = '내용을 입력해 주세요.',
    onSubmit,
}) => {
    const onKeyDown = () => {
    }

    return (
        <RegisterContainer>
            <ReactTextareaAutosize
                value={value}
                placeholder={placeholder}
                style={{
                    flex: 1,
                    display: 'flex',
                    outline: 'none',
                    resize: 'none',
                    padding: '6px 12px',
                    margin: 0,
                    marginRight: 12,
                    borderRadius: 8,
                }}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <Button onClick={onSubmit}>입력</Button>
        </RegisterContainer>
    )
}

const RegisterContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

export default CommentRegister
