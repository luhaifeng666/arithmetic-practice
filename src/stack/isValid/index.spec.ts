import isValid from './index'

const TEST_CASES = [
  {
    s: '',
    res: true
  }, {
    s: '()',
    res: true
  }, {
    s: '()[]{}',
    res: true
  }, {
    s: '(]',
    res: false
  }, {
    s: '([)]',
    res: false
  }, {
    s: '{([])}',
    res: true
  }, {
    s: '{([])',
    res: false
  }
]

interface Case {
  s: string
  res: boolean
}

it('Check symbol is valid', () => {
  TEST_CASES.forEach((item: Case) => {
    const { s, res } = item
    expect(isValid(s)).toBe(res)
  })
})
