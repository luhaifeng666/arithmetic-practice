import lengthOfLastWord from './index'

const TEST_CASES = [
  { str: "Hello World", res: 5 },
  { str: '', res: 0 },
  { str: "   fly me   to   the moon  ", res: 4 },
]

interface Case {
  str: string
  res: number
}

it('lengthOfLastWord', () => {
  TEST_CASES.forEach((item: Case) => {
    const { str, res } = item
    expect(lengthOfLastWord(str)).toEqual(res)
  })
})
