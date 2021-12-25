import Solution from './index'

it('solution', () => {
  const nums = [1, 2, 3]
  // 实例化
  const solution = new Solution(nums)
  // 包含nums属性
  expect(solution.nums).toEqual(nums)
  // 打乱数组
  const _nums = solution.shuffle()
  expect(_nums).not.toEqual(nums)
  // reset返回原数组
  const resetNums = solution.reset()
  expect(resetNums).toEqual(nums)
})
