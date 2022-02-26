import { maximumDifference, maximumDifference2 } from './index'

const TEST_CASES = [
  { nums: [7,1,5,4], res: 4 },
  { nums: [9,4,3,2], res: -1 },
  { nums: [1,5,2,10], res: 9 }
]

interface Case {
  nums: number[]
  res: number
}

function handleTest (fn) {
  return () => {
    TEST_CASES.forEach(({ nums, res }: Case) => {
      expect(fn(nums)).toBe(res)
    })
  }
}

it('maximumDifference', handleTest(maximumDifference))
it('maximumDifference2', handleTest(maximumDifference2))
