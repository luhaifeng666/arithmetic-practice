import { reverseBitsByString, reverseBits } from './index'

const TEST_CASES = [
  {
    target: 43261596,
    res: 964176192
  },
  {
    target: 4294967293,
    res: 3221225471
  }
]

interface Case {
  target: number
  res: number
}

function testHandle(fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { target, res } = item
      expect(fn(target)).toEqual(res)
    })
  }
}

it('reverseBitsByString', testHandle(reverseBitsByString))
it('reverseBits', testHandle(reverseBits))
