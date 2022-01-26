import maxSubArray from './index'

const TEST_CASES = [
  { nums: [-2,1,-3,4,-1,2,1,-5,4], res: 6 },
  { nums: [4], res: 4 },
  { nums: [], res: 0 },
  { nums: [5,4,-1,7,8], res: 23 }
]

interface Case {
  nums: number[]
  res: number
}

it('maxSubArray', () => {
  TEST_CASES.forEach((item: Case) => {
    const { nums, res } = item
    expect(maxSubArray(nums)).toEqual(res)
  })
})
