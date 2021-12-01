import { isPalindrome, isPalindromeByReverse } from './index'

const TEST_CASES = [
  {
    s: 'A man, a plan, a canal: Panama',
    res: true
  }, {
    s: 'race a ca',
    res: false
  }, {
    s: 'ab',
    res: false
  }, {
    s: '',
    res: true
  }
]

interface Case {
  s: string
  res: boolean
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { s, res } = item
      expect(fn(s)).toBe(res)
    })
  }
}

it('isPalindrome', testHandle(isPalindrome))
it('isPalindromeByReverse', testHandle(isPalindromeByReverse))
