import isSymmetric from './index'

const TEST_CASES = [
  { tree: null, res: true },
  { tree: { val: 1, left: null, right: null }, res: true },
  {
    tree: {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null
      },
      right: {
        val: 3,
        left: null,
        right: null
      }
    },
    res: false
  }
]

it('isSymmetric', () => {
  TEST_CASES.forEach(item => {
    const { tree, res } = item
    expect(isSymmetric(tree)).toBe(res)
  })
})
