import findLUSlength from './index'

const TEST_CASES = [
  { a: 'aba', b: 'cdc', res: 3 },
  { a: 'aaa', b: 'aaa', res: -1 },
  { a: 'abac', b: 'cdc', res: 4 },
]

interface Case {
  a: string
  b: string
  res: number
}

it('findLUSlength', () => {
  TEST_CASES.forEach(({ a, b, res }: Case) => {
    expect(findLUSlength(a, b)).toBe(res)
  })
})
