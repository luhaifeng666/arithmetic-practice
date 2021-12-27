import myAtoi from './index'

const TEST_CASES = [
  { s: '42', res: 42 },
  { s: '-42', res: -42 },
  { s: 'aaaa', res: 0 },
  { s: '1abc', res: 1 },
  { s: '-1abc', res: -1 },
]

interface Case {
  s: string
  res: number
}

it('my atoi', () => {
  TEST_CASES.forEach((item: Case) => {
    const { s, res } = item
    expect(myAtoi(s)).toBe(res)
  })
})
