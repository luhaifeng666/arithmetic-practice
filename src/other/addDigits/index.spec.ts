import { addDigits } from './index'

const TEST_CASES = [
  { num: 38, res: 2 },
  { num: 0, res: 0 },
]

interface Case {
  num: number
  res: number
}

it('addDigits', () => {
  TEST_CASES.forEach(({ num, res }: Case) => {
    expect(addDigits(num)).toBe(res)
  })
})
