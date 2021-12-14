import { hammingDistance, hammingDistanceByString } from './index'

const TEST_CASES = [
  { x: 1, y: 4, res: 2 },
  { x: 3, y: 1, res: 1 },
  { x: 15, y: 7, res: 1 },
  { x: 1, y: 1, res: 0 },
]

interface Case {
  x: number
  y: number
  res: number
}

function testHandle (fn) {
  return function () {
    TEST_CASES.forEach((item: Case) => {
      const { x, y, res } = item
      expect(fn(x, y)).toEqual(res)
    })
  }
}

it('hammingDistance', testHandle(hammingDistance))
it('hammingDistanceByString', testHandle(hammingDistanceByString))
