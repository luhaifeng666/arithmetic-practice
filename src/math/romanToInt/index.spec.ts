import romanToInt from './index'

const TEST_CASES = [
  { target: 'III', res: 3 },
  { target: 'IV', res: 4 },
  { target: 'IX', res: 9 },
  { target: 'LVIII', res: 58 },
  { target: 'MCMXCIV', res: 1994 },
  { target: '', res: 0 }
]

interface Case {
  target: string
  res: number
}

it('roman to int', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(romanToInt(target)).toEqual(res)
  })
})
