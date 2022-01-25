/**
 * 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
export default function(nums: number[]): number {
  if (nums.length < 3) return Math.max(...nums)
  const list: number[] = []
  list[0] = nums[0]
  list[1] = Math.max(...nums.slice(0, 2))
  for (let i = 2; i < nums.length; i++) {
    list.push(Math.max(nums[i] + list[i - 2], list[i - 1]))
  }
  return list[list.length - 1]
}
