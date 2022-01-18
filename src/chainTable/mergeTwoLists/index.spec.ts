import mergeTwoLists from './index'

const TEST_CASES = [
  { list1: null, list2: null, res: null },
  { list1: { val: 0, next: null }, list2: { val: 1, next: null }, res: { val: 0, next: { val: 1, next: null }} }
]

it('mergeTwoLists', () => {
  TEST_CASES.forEach(item => {
    const { list1, list2, res } = item
    expect(mergeTwoLists(list1, list2)).toEqual(res)
  })
})
