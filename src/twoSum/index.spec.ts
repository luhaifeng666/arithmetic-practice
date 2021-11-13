import { getSum, getSumByHash } from './index'

const TEST_CASES = [{
    nums: [3,2,4],
    target: 6,
    res: [1, 2]
}, {
    nums: [2,7,11,15],
    target: 9,
    res: [0, 1]
}, {
    nums: [3,3],
    target: 6,
    res: [0, 1]
}, {
    nums: [0, 1, 2, 0],
    target: 0,
    res: [0, 3]
}]

interface Case {
    nums: number[],
    target: number,
    res: number[]
}

it('getSum', () => {
    TEST_CASES.forEach((item: Case) => {
        const { nums, target, res } = item
        expect(getSum(nums, target)).toEqual(res)
    })
})

it('getSumByHash', () => {
    TEST_CASES.forEach((item: Case) => {
        const { nums, target, res } = item
        expect(getSumByHash(nums, target)).toEqual(res)
    })
})
