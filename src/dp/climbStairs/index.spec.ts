import  climbStairs from './index'

const TEST_CASES = [
  { target: 1, res: 1 },
  { target: 2, res: 2 },
  { target: 3, res: 3 },
  { target: 4, res: 5 },
  { target: 5, res: 8 },
]

interface Case {
  target: number
  res: number
}

it('climbStairs', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(climbStairs(target)).toBe(res)
  })
})
