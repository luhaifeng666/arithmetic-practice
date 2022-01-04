import countAndSay from './index'

const TEST_CASES = [
  { n: 1, res: '1' },
  { n: 2, res: '11' },
  { n: 3, res: '21' },
  { n: 4, res: '1211' },
  { n: 5, res: '111221' },
  { n: 6, res: '312211' },
]

interface Case {
  n: number
  res: string
}

it('countAndSay', () => {
  TEST_CASES.forEach((item: Case) => {
    const { n, res } = item
    expect(countAndSay(n)).toEqual(res)
  })
})
