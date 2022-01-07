import levelOrder from './index'

const TEST_CASES = [
  { tree: { val: 0, left: null, right: null }, res: [[0]]},
  { tree: { val: 1, left: {val: 2, left: null, right: null }, right: { val: 3, left: null, right: null }}, res: [[1],[2,3]]}
]

it('levelOrder', () => {
  TEST_CASES.forEach(item => {
    const { tree, res } = item
    expect(levelOrder(tree)).toEqual(res)
  })
})
