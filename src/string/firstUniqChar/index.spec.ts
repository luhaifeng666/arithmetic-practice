import { firstUniqChar, firstUniqCharByIndexOf } from './index'

const TEST_CASES = [
  { str: 'leetcode', res: 0 },
  { str: 'aaaabbbbbc', res: 9 },
  { str: 'abcs', res: 0 },
  { str: 'loveleetcode', res: 2 },
  { str: 'aaa', res: -1 },
]

interface Case {
  str: string,
  res: number
}

function testHandle (fn) {
  return function () {
    TEST_CASES.forEach((item: Case) => {
      const { str, res } = item
      expect(fn(str)).toBe(res)
    })
  }
}

it ('firstUniqChar', testHandle(firstUniqChar))

it ('firstUniqCharByIndexOf', testHandle(firstUniqCharByIndexOf))
