import longestCommonPrefix from './index'

const TEST_CASES = [
  { target: [], res: '' },
  { target: ["a"], res: "a" },
  { target: ["flower","flow","flight"], res: "fl" },
  { target: ["dog","racecar","car"], res: "" },
]

interface Case {
  target: string[]
  res: string
}

it ('longestCommonPrefix', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(longestCommonPrefix(target)).toBe(res)
  })
})
