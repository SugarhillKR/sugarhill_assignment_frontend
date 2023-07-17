import styled from 'styled-components'
import CommentRegister from './Components/CommentRegister'
import { getComments } from './mock'
import { useEffect, useState } from 'react'
import RadioButton from './Components/RadioButton'
import Header from './Components/Header'
import Comment from './Components/Comment'

function App() {
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hoverCommentId, setHoverCommentId] = useState('')
    const [sortType, setSortType] = useState('ascend')

    const fecthComments = async () => {
        setIsLoading(true)
        const originComments = await getComments()
        originComments && SortComments(originComments)
        setIsLoading(false)
    }

    const SortComments = (originComments) => {
        switch (sortType) {
            case 'descend':
                return
            case 'ascend':
                console.log(originComments)
            default:
                const ascendComments = originComments
                setComments(ascendComments)
                return
        }
    }

    const onTextChange = () => {}

    const onCommentSubmit = async () => {}

    const onClickHeart = () => {}

    useEffect(() => {
        if (comments.length) SortComments(comments)
        else fecthComments()
    }, [sortType])

    return (
        <div>
            <Header />
            <CommentListContainer>
                <SortContainer>
                    <RadioButton
                        title={'오래된순'}
                        value={'ascend'}
                        checked={sortType === 'ascend'}
                        onChange={(e) => setSortType(e.target.value)}
                    />
                    <RadioButton
                        title={'최신순'}
                        value={'descend'}
                        checked={sortType === 'descend'}
                        onChange={(e) => setSortType(e.target.value)}
                    />
                </SortContainer>
                {isLoading && <IsLoading>isLoading...</IsLoading>}
                {comments.length === 0 ? (
                    <NoComments>검색결과가 없습니다</NoComments>
                ) : (
                    comments.map((item) => {
                        var { memo, userName, userId, createdDateUtc, memoId } =
                            item
                        return (
                            <Comment
                                memo={memo}
                                userName={userName}
                                userId={userId}
                                createdDateUtc={createdDateUtc}
                                isHover={hoverCommentId === memoId}
                                onMouseOver={() => setHoverCommentId(memoId)}
                                onMouseOut={() => setHoverCommentId('')}
                            />
                        )
                    })
                )}
                <Divider />
                <CommentRegister
                    value={commentText}
                    onChange={onTextChange}
                    onSubmit={onCommentSubmit}
                />
            </CommentListContainer>
        </div>
    )
}

const CommentListContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 72px auto;
    width: 480px;
    border: 1px solid darkcyan;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 8px;
    padding: 0px 24px 24px 24px;
`

const IsLoading = styled.div`
    position: absolute;
    right: 200px;
    top: 100px;
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid lightgray;
    font-weight: bold;
`

const SortContainer = styled.div`
    display: flex;
    margin-top: 24px;
`

const NoComments = styled.div`
    margin-top: 24px;
`

const Divider = styled.div`
    height: 1px;
    background: lightgray;
    margin-top: 20px;
`

export default App
