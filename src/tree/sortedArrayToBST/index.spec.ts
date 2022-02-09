import { sortedArrayToBST } from './index'

const TEST_CASES = [
  {
    target: [-10,-3,0,5,9],
    res: { val: 0, left: { val: -3, left: { val: -10, left: null, right: null}, right: null}, right: { val: 9, left: { val: 5, left: null, right: null}, right: null}}
  },
  { target: [], res: null }
]

interface Case {
  target: number[]
  res: any
}

it('sortedArrayToBST', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(sortedArrayToBST(target)).toEqual(res)
  })
})
