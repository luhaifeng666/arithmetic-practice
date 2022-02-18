import addBinary from './index'

const TEST_CASES = [
  { a: '11', b: '1', res: '100'},
  { a: '1010', b: '1011', res: '10101'}
]

interface Case {
  [param: string]: string
}

it('addBinary', () => {
  TEST_CASES.forEach((item: Case) => {
    const { a, b, res } = item
    expect(addBinary(a, b)).toEqual(res)
  })
})
