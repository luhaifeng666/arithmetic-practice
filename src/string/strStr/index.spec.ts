import { strStr, strStrByIndexOf } from './index'

const TEST_CASES = [
  {
    haystack: '',
    needle: '',
    res: 0
  }, {
    haystack: 'hello',
    needle: 'll',
    res: 2
  }, {
    haystack: 'aaaaa',
    needle: 'bbb',
    res: -1
  }
]

interface Case {
  haystack: string
  needle: string
  res: number
}

function testHandle (fn) {
  return function() {
    TEST_CASES.forEach((item: Case) => {
      const { haystack, needle, res } = item
      expect(fn(haystack, needle)).toEqual(res)
    })
  }
}

it('strStr', testHandle(strStr))
it('strStrByIndexOf', testHandle(strStrByIndexOf))
