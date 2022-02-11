/**
 * 学生分数的最小差值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export default function(nums: number[], k: number): number {
  // 只挑一个成绩的时候，最小值为0
  if (nums.length < 2 || k < 2) return 0
  // 排序
  nums.sort((pre, next) => pre - next)
  // 遍历
  const diffs: number[] = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    const resets: number[] = nums.slice(i + 1)
    for (let n = 0; n < resets.length - k + 2; n++) {
      const arr = resets.slice(n, n + k - 1)
      diffs.push(resets[k - 2] - nums[i])
    }
  }
  return Math.min(...diffs)
}
