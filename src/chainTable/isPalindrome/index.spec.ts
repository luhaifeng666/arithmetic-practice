import isPalindrome from './index'

const TEST_CASES = [
  { target: null, res: true },
  { target: { val: 0, next: null }, res: true },
  { target: { val: 0, next: { val: 1, next: null } }, res: false },
  { target: { val: 0, next: { val: 1, next: { val: 0, next: null } } }, res: true }
]

interface Target {
  val: number
  next: Target | null
}

interface Case {
  target: Target | null
  res: boolean
}

it('isPalindrome', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(isPalindrome(target)).toBe(res)
  })
})
