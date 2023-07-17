import React from 'react'

const Button = ({ onClick, children, style }) => {
    return (
        <div style={{ width: 'fit-content', ...style }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    height: '100%',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    padding: 'none',
                    border: '1px solid lightgray',
                    borderRadius: 8,
                }}>
                {children}
            </button>
        </div>
    )
}

export default Button
