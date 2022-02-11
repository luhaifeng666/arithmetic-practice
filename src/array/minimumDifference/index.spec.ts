import minimumDifference from './index'

const TEST_CASES = [
  { target: [], k: 0, res: 0 },
  { target: [90], k: 1, res: 0 },
  { target: [9,4,1,7], k: 2, res: 2 },
]

interface Case {
  target: number[]
  k: number
  res: number
}

it('minimumDifference', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, k ,res } = item
    expect(minimumDifference(target, k)).toEqual(res)
  })
})
