import intersect from './index'

const TEST_CASES = [
  {
    nums1: [1,2,2,1],
    nums2: [2,2],
    res: [2,2]
  }, {
    nums1: [4,9,5],
    nums2: [9,4,9,8,4],
    res: [4,9]
  }
]

interface Case {
  nums1: number[]
  nums2: number[]
  res: number[]
}

it('intersect', () => {
  TEST_CASES.forEach((item: Case) => {
    const { nums1, nums2, res } = item
    expect(intersect(nums1, nums2)).toEqual(res)
  })
})
