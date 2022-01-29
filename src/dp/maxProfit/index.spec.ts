import maxProfit from './index'

const TEST_CASES = [
  { target: [], res: 0 },
  { target: [7,1,5,3,6,4], res: 5 },
  { target: [7,6,4,3,1], res: 0 },
]

interface Case {
  target: number[]
  res: number
}

it('maxProfit', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(maxProfit(target)).toEqual(res)
  })
})
