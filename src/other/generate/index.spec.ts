import generate from './index'

const TEST_CASES = [
  { numRows: 1, res: [[1]]},
  { numRows: 2, res: [[1],[1,1]]},
  { numRows: 3, res: [[1],[1,1],[1,2,1]]},
  { numRows: 4, res: [[1],[1,1],[1,2,1],[1,3,3,1]]},
  { numRows: 5, res: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]}
]

interface Case {
  numRows: number
  res: Array<Array<number>>
}

it('generate', () => {
  TEST_CASES.forEach((item: Case) => {
    const { numRows, res } = item
    expect(generate(numRows)).toEqual(res)
  })
})
