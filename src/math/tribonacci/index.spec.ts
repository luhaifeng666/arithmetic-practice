import { tribonacci } from './index'

const TEST_CASES = [
  { num: -1, res: 0 },
  { num: 0, res: 0 },
  { num: 1, res: 1 },
  { num: 2, res: 1 },
  { num: 3, res: 2 },
  { num: 4, res: 4 },
  { num: 25, res: 1389537 },
]

interface Case {
  num: number
  res: number
}

it('tribonacci', () => {
  TEST_CASES.forEach((item: Case) => {
    const { num, res } = item
    expect(tribonacci(num)).toBe(res)
  })
})
