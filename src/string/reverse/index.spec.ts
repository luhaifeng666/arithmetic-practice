import {
  reverseByString,
  reverse
} from './index'

const TEST_CASES = [
  {
    number: 123,
    res: 321
  }, {
    number: 0,
    res: 0
  }, {
    number: -123,
    res: -321
  }, {
    number: 8463847412,
    res: 0
  }, {
    number: -8463847418,
    res: 0
  }
]

interface Case {
  number: number
  res: number
}

function testHandler (fn) {
  return () => {
    TEST_CASES.forEach(item => {
      const { number, res } = item
      expect(fn(number)).toBe(res)
    })
  }
}

it('reverseByString', testHandler(reverseByString))
it('reverse', testHandler(reverse))
