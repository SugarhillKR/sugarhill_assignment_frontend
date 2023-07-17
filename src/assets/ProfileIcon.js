export const ProfileIcon = ({width = 24, height = 24, fill = 'gray'}) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z" />
                <path
                    d="M12.026 12.585c4.46 0 8.194 2.81 8.685 6.972l.007.108c.005.36-.097 1.242-.842 1.345l-.147.01H4.31c-.705 0-.917-.593-.971-1.035l-.015-.179a2.231 2.231 0 0 1-.002-.078l.003-.126.004-.045c.423-4.158 4.243-6.972 8.698-6.972zM12.02 2.036a4.602 4.602 0 1 1 0 9.205 4.602 4.602 0 0 1 0-9.205z"
                    fill={fill}
                />
            </g>
        </svg>
    )
}
