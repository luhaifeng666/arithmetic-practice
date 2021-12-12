import { merge } from './index'

const TEST_CASES = [
  { nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3, res: [1,2,2,3,5,6] },
  { nums1: [1], m: 1, nums2: [], n: 0, res: [1] },
  { nums1: [0], m: 0, nums2: [1], n: 1, res: [1] }
]

interface Case {
  nums1: number[]
  m: number
  nums2: number[]
  n: number
  res: number[]
}

it('merge', () => {
  TEST_CASES.forEach((item: Case) => {
    const { nums1, m, nums2, n, res } = item
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(res)
  })
})
