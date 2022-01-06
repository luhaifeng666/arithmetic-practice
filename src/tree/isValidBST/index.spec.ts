import isValidBST from './index'

const TEST_CASES = [
  { root: null, res: true },
  { root: { val: 1, left: { val: 0, left: null, right: null }, right: { val: 2, left: null, right: null } }, res: true},
  { root: { val: 2, left: { val: 0, left: null, right: null }, right: { val: 2, left: null, right: null } }, res: false}
]

it('isValidBST', () => {
  TEST_CASES.forEach(item => {
    const { root, res } = item
    expect(isValidBST(root)).toBe(res)
  })
})
