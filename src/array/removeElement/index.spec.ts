import removeElement from './index'

const TEST_CASES = [
  { nums: [3,2,2,3], val: 3, res: 2 },
  { nums: [0,1,2,2,3,0,4,2], val: 2, res: 5 }
]

interface Case {
  nums: number[]
  val: number
  res: number
}

it('removeElement', () => {
  TEST_CASES.forEach((item: Case) => {
    const { nums, val, res } = item
    expect(removeElement(nums, val)).toBe(res)
  })
})
