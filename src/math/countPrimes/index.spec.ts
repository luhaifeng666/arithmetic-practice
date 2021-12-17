import countPrimes from './index'

const TEST_CASES = [
  { num: 4, res: 2},
  { num: 10, res: 4},
  { num: 0, res: 0},
  { num: 1, res: 0},
]

interface Case {
  [name: string]: number
}

it('countPrimes', () => {
  TEST_CASES.forEach((item: Case) => {
    const { num, res } = item
    expect(countPrimes(num)).toEqual(res)
  })
})
