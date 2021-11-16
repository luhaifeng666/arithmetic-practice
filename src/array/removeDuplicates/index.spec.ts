import removeDuplicates from './index'

const TEST_CASES = [
  {
    arr: [0, 0, 1, 2, 2, 3, 3, 4],
    res: 5
  }, {
    arr: [1,1,2],
    res: 2
  }, {
    arr: [0, 0],
    res: 1
  }, {
    res: 0
  }, {
    arr: [],
    res: 0
  }, {
    arr: [1],
    res: 1
  }
]

interface Case {
  arr?: Array<number>,
  res: number
}

it('remove repeat value', () => {
  TEST_CASES.forEach((item: Case) => {
    const { arr, res } = item
    expect(removeDuplicates(arr)).toBe(res)
  })
})
