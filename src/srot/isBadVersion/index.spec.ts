import solution from './index'

const TEST_CASES = [
  {
    targetVersion: 4,
    latestVersion: 5,
    res: 4
  }, {
    targetVersion: 4,
    latestVersion: 10,
    res: 4
  }, {
    targetVersion: 97,
    latestVersion: 100,
    res: 97
  }, {
    targetVersion: 1000,
    latestVersion: 5000,
    res: 1000
  }
]

interface Case {
  targetVersion: number
  latestVersion: number
  res: number
}

it('isBadVersion', () => {
  TEST_CASES.forEach((item: Case) => {
    const { targetVersion, latestVersion, res } = item
    expect(solution(targetVersion)(latestVersion)).toEqual(res)
  })
})
