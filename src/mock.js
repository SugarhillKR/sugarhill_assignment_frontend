// mock.js 파일은 api를 대신하므로 수정하시면 안됩니다.

/**
 * userId: number;
 * memoId: number;
 * userName: string;
 * memo: string;
 * isLike: boolean;
 * createdDateUtc: string;
 */
const dummyData = [
    {
        userId: 1,
        memoId: 1223534,
        userName: '전경민',
        memo: '1. 담당 중개사가 변경되었습니다. 강명수 > 유진무',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 10:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 0,
        memoId: 21534524,
        userName: '시스템',
        memo: '4. 담당 중개사가 배정되었습니다: 강명수',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 13:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 1,
        memoId: 2152414,
        userName: '전경민',
        memo: '2. 담당 중개사가 변경되었습니다. 유진무 > 김지인',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 11:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 2,
        memoId: 45745634,
        userName: '유진무',
        memo: '7. 콜백 상태가 저장되었습니다: 성공',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 18:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 3,
        memoId: 3452345,
        userName: '김지인',
        memo: '3. 미팅 상태가 저장되었습니다: 진행중',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 12:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 2,
        memoId: 874567,
        userName: '유진무',
        memo: '5. 매물 제안 상태가 저장되었습니다: 성공',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 14:35:05 GMT+0900 (한국 표준시)',
    },
    {
        userId: 3,
        memoId: 456454635,
        userName: '김지인',
        memo: '6. 콜백 상태가 저장되었습니다: 성공',
        isLike: false,
        createdDateUtc: 'Tue May 30 2023 17:35:05 GMT+0900 (한국 표준시)',
    },
]

export const getComments = () => {
    const random = Math.random()
    const errorPercentage = 0.01 // ** 이 mock api는 에러가 발생합니다. **//
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (random < errorPercentage) reject('mock api error')
            else resolve(dummyData)
        }, 1000)
    })
}

/**
 * @payload
 * userName: string;
 * memo: string;
 * createdDateUtc: string;
 */
export const postComment = (payload) => {
    const userId = 100;
    const memoId = Math.random().toString();
    const isLike = false;
    const random = Math.random()
    const errorPercentage = 0.01 // ** 이 mock api는 에러가 발생합니다. **//
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof payload !== 'object') reject ('400 Bad Request error')
            if (typeof payload.memo !== 'string' || payload.memo === '') reject('400 Bad Request error')
            if (typeof payload.createdDateUtc !== 'string') reject('400 Bad Request error')
            if (random < errorPercentage) reject('500 mock error')
            else {
                payload.userId = userId;
                payload.memoId = memoId;
                payload.isLike = isLike;
                dummyData.push(payload)
                resolve('200 post comment success')
            }
        }, 1000)
    })
}

/**
 * @payload
 * isLike: boolean
 * memoId: number
 */
export const putCommentLike = (payload) => {
    const { isLike, memoId } = payload
    const random = Math.random()
    const errorPercentage = 0.01 // ** 이 mock api는 에러가 발생합니다. **//
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof isLike !== 'boolean') reject('400 Bad request error')
            if(typeof memoId !== 'number') reject('400 Bad request error')
            const target = dummyData.findIndex((data) => data.memoId === memoId)
            if (typeof target !== 'number') reject('500 there is no memo')
            dummyData[target].isLike = isLike
            if (random < errorPercentage) reject('500 mock error')
            else {
                resolve('200 comment like success')
            }
        }, 1000)
    })
}
