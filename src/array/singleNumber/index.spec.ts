import { singleNumber } from './index'

const TEST_CASES = [
  {
    arr: [2,2,1],
    res: 1
  }, {
    arr: [4,1,2,1,2],
    res: 4
  }, {
    arr: [4,1,2,1,2,100,101,102,101,102,100],
    res: 4
  }
]

interface Case {
  arr: number[]
  res: number
}

it('singleNumber', () => {
  TEST_CASES.forEach((item: Case) => {
    const { arr, res } = item
    expect(singleNumber(arr)).toBe(res)
  })
})
