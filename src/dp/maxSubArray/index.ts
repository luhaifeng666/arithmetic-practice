/**
 * 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
export default function(nums: number[]): number {
  if (nums.length < 1) return 0
  if (nums.length < 2) return nums[0]
  let sum = nums[0]
  let max = sum
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum, 0) + nums[i]
    max = Math.max(max, sum)
  }
  return max
}
