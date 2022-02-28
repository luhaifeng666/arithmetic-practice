import deleteDuplicates from './index'

const TEST_CASES = [
  {
    head: { val: 1, next: { val: 1, next: { val: 2, next: null}}},
    res: {val: 1, next: { val: 2, next: null }}
  },
  {
    head: { val: 1, next: { val: 1, next: { val: 1, next: null}}},
    res: {val: 1, next: null}
  }
]

type Node = {
  val: number
  next: Node | null
}

interface Case {
  head: Node,
  res: Node
}

it('deleteDuplicates', () => {
  TEST_CASES.forEach(({ head, res }: Case) => {
    expect(deleteDuplicates(head)).toEqual(res)
  })
})
