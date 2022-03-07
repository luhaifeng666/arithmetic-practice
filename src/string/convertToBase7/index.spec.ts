import convertToBase7 from './index'

const TEST_CASES = [
  { num: 0, res: '0' },
  { num: 100, res: '202' },
  { num: -7, res: '-10' },
]

interface Case {
  num: number
  res: string
}

it('convertToBase7', () => {
  TEST_CASES.forEach(({ num, res }:Case) => {
    expect(convertToBase7(num)).toBe(res)
  })
})
