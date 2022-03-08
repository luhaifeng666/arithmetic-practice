import convertToTitle from './index'

const TEST_CASES = [
  { columnNumber: 1, res: 'A' },
  { columnNumber: 28, res: 'AB' },
  { columnNumber: 701, res: 'ZY' },
  { columnNumber: 2147483647, res: 'FXSHRXW' }
]

interface Case {
  columnNumber: number
  res: string
}

it('convertToTitle', () => {
  TEST_CASES.forEach(({ columnNumber, res }:Case) => {
    expect(convertToTitle(columnNumber)).toEqual(res)
  })
})
