import simplifiedFractions from './index'

const TEST_CASES = [
  { num: 0, res: [] },
  { num: 1, res: [] },
  { num: 2, res: ["1/2"] },
  { num: 3, res: ["1/2","1/3","2/3"] },
  { num: 4, res: ["1/2","1/3","1/4","2/3","3/4"] },
]

interface Case {
  num: number
  res: string[]
}

it('simplifiedFractions', () => {
  TEST_CASES.forEach((item: Case) => {
    const { num, res } = item
    expect(simplifiedFractions(num).every(num => res.includes(num))).toBeTruthy()
  })
});
