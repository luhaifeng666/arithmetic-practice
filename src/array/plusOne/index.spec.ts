import plusOne from "./index"

const TEST_CASES = [
  {
    arr: [],
    res: []
  }, {
    arr: [1, 2, 3],
    res: [1, 2, 4]
  }, {
    arr: [4, 3, 2, 1],
    res: [4, 3, 2, 2]
  }, {
    arr: [0],
    res: [1]
  }, {
    arr: [9, 9, 9],
    res: [1, 0, 0, 0]
  }
]

interface Case {
  arr: number[]
  res: number[]
}

it('Plus one', () => {
  TEST_CASES.forEach((item: Case) => {
    const { arr, res } = item
    expect(plusOne(arr)).toEqual(res)
  })
})
