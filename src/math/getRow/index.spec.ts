import getRow from './index'

const TEST_CASE = [
  { rowIndex: 0, res: [1] },
  { rowIndex: 1, res: [1, 1] },
  { rowIndex: 3, res: [1,3,3,1] },
]

interface Case {
  rowIndex: number
  res: number[]
}

it('getRow', () => {
  TEST_CASE.forEach((item: Case) => {
    const { rowIndex, res } = item
    expect(getRow(rowIndex)).toEqual(res)
  })
})
