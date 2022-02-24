import { majorityElement, majorityElementBySort } from './index'

const TEST_CASES = [
  { nums: [3,2,3], res: 3 },
  { nums: [2,2,1,1,1,2,2], res: 2 }
]

interface Case {
  nums: number[]
  res: number
}

function handleTest (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { nums, res } = item
      expect(fn(nums)).toBe(res)
    })
  }
}

describe('majorityElement', () => {
  it('majorityElement', handleTest(majorityElement))
  it('majorityElementBySort', handleTest(majorityElementBySort))
})
