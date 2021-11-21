import { rotate, rotateByReverse, rotateByTemp } from './index'

const TEST_CASES = [
  {
    nums: [1, 2, 3, 4, 5, 6, 7],
    k: 3,
    res: [5, 6, 7, 1, 2, 3, 4]
  }, {
    nums: [1, 2],
    k: 3,
    res: [2, 1]
  }, {
    nums: [-1, -100, 3, 99],
    k: 2,
    res: [3, 99, -1, -100]
  }
]

interface Case {
  nums: number[],
  k: number,
  res: number[]
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { nums, k, res } = item
      const temp = [...nums]
      fn(temp, k)
      expect(temp).toEqual(res)
    })
  }
}

it('rotate', testHandle(rotate))

it('rotateByReverse', testHandle(rotateByReverse))

it('rotateByTemp', testHandle(rotateByTemp))
