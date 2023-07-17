export const MoreIcon = ({ width = 24, height = 24, fill = 'gray' }) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" />
                <path
                    d="M4.558 9.536a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm7.442 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm7.442 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"
                    fill={fill}
                />
            </g>
        </svg>
    )
}
