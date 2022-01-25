import rob from './index'

const TEST_CASES = [
  { target: [2,1,1,2], res: 4 },
  { target: [2], res: 2 },
  { target: [2,1], res: 2 },
  { target: [2,1,3,5,6], res: 11 },
]

interface Case {
  target: number[]
  res: number
}

it('rob', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(rob(target)).toEqual(res)
  })
})
