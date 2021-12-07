import { isPowerOfThree, isPowerOfThreeByRegular } from './index'

const TEST_CASES = [
  { target: 9, res: true },
  { target: 1, res: true },
  { target: 27, res: true },
  { target: 0, res: false },
]

interface Case {
  target: number
  res: boolean
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { target, res } = item
      expect(fn(target)).toBe(res)
    })
  }
}

it('isPowerOfThree', testHandle(isPowerOfThree))
it('isPowerOfThreeByRegular', testHandle(isPowerOfThreeByRegular))
