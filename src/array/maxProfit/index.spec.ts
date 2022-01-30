import { maxProfitByDp, maxProfit } from './index'

const TEST_CASES = [
  { target: [], res: 0 },
  { target: [7,6,4,3,1], res: 0 },
  { target: [7,1,5,3,6,4], res: 7 },
  { target: [1,2,3,4,5], res: 4 }
]

interface Case {
  target: number[]
  res: number
}

function handleTest (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { target, res } = item
      expect(fn(target)).toEqual(res)
    })
  }
}

it('maxProfitByDp', handleTest(maxProfitByDp))
it('maxProfit', handleTest(maxProfit))
