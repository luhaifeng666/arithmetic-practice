import mySqrt from './index'

const TEST_CASES = [
  { x: 0, res: 0 },
  { x: 4, res: 2 },
  { x: 8, res: 2 }
]

interface Case {
  x: number
  res: number
}

it('mySqrt', () => {
  TEST_CASES.forEach(({ x, res }: Case) => {
    expect(mySqrt(x)).toBe(res)
  })
})
