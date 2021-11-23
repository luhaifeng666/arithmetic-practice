import moveZeroes from './index'

const TEST_CASES = [
  {
    arr: [0,1,0,3,12],
    res: [1,3,12,0,0]
  }, {
    arr: [0,1],
    res: [1,0]
  }, {
    arr: [0,0,1],
    res: [1,0,0]
  }, {
    arr: [0],
    res: [0]
  }
]

interface Case {
  arr: number[]
  res: number[]
}

it('moveZeroes', () => {
  TEST_CASES.forEach((item: Case) => {
    const { arr, res } = item
    moveZeroes(arr)
    expect(arr).toEqual(res)
  })
})
