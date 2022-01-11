import removeNthFromEnd from './index'

const TEST_CASES = [
  { head: { next: { next: null }}, n: 1, res: { next: null} },
  { head: { next: null }, n: 1, res: null },
]

it('removeNthFromEnd', () => {
  TEST_CASES.forEach(item => {
    const { head, n, res } = item
    expect(removeNthFromEnd(head, n)).toEqual(res)
  })
})
