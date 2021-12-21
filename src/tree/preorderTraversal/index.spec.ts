import { preorderTraversal, preorderTraversalByTrack } from "./index"

const TEST_CASES = [
  { target: {}, res: []},
  { target: { val: 1, left: null, right: { val: 2 }}, res: [1, 2]},
  { target: { val: 1, left: { val: 2, left: { val: 3 }, right: {val: 4 }}, right: { val: 5 }}, res: [1, 2, 3, 4, 5]},
  { target: { val: 1, left: null, right: null}, res: [1]},
]

interface Case {
  target: TreeNode
  res: number[]
}

interface TreeNode {
  val?: number
  left?: TreeNode | null
  right?: TreeNode | null
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { target, res } = item
      expect(fn(target)).toEqual(res)
    })
  }
}

it('preorderTraversal', testHandle(preorderTraversal))
it('preorderTraversalByTrack', testHandle(preorderTraversalByTrack))
