import reverseList from './index'

const TEST_CASES = [
  { target: null, res: null },
  { target: {val: 1, next: {val: 2, next: null}}, res: {val: 2, next: {val: 1, next: null}} },
]

it('reverseList', () => {
  TEST_CASES.forEach(item => {
    const { target, res } = item
    expect(reverseList(target)).toEqual(res)
  })
})
