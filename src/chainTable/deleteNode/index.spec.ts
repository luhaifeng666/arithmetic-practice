import deleteNode from './index'

const TEST_CASES = [
  {
    target: { val: 1, next: { val: 5, next: { val: 2, next: null}}},
    res: { val: 5, next: { val: 2, next: null}}
  },
  {
    target: { val: 5, next: { val: 2, next: null}},
    res: { val: 2, next: null}
  }
]

interface Node {
  val: number
  next: Node | any
}

interface Case {
  target: Node
  res: Node
}

it('deleteNode', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    deleteNode(target)
    expect(target).toEqual(res)
  })
})
