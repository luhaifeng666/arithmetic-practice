import reverseOnlyLetters from './index'

const TEST_CASES = [
  { s: '-', res: '-' },
  { s: 'ab-cd', res: 'dc-ba' },
  { s: 'a-bC-dEf-ghIj', res: 'j-Ih-gfE-dCba' },
]

interface Case {
  s: string,
  res: string
}

it('reverseOnlyLetters', () => {
  TEST_CASES.forEach(({ s, res }: Case) => {
    expect(reverseOnlyLetters(s)).toBe(res)
  })
})
