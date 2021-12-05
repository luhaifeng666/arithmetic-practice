import { hammingWeight, hammingWeightByString } from './index'

const TEST_CASES = [{
  target: 11,
  res: 3
}, {
  target: 128,
  res: 1
}, {
  target: 4294967293,
  res: 31
}]

interface Case {
  target: number
  res: number
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { target, res } = item
      expect(fn(target)).toEqual(res)
    })
  }
}

it ('hammingWeight', testHandle(hammingWeight))
it ('hammingWeightByString', testHandle(hammingWeightByString))
