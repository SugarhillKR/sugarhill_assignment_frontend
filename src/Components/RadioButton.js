import styled from 'styled-components'

const RadioButton = ({ title, value, checked, onChange }) => {
    return (
        <ButtonContainer>
            <label>
                <input
                    type="radio"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                {title}
            </label>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    margin-right: 8px;
`

export default RadioButton
