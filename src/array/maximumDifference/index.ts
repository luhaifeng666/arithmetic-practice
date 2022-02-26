/**
 * 增量元素之间的最大差值
 * @param {number[]} nums
 * @return {number}
 */
export const maximumDifference = function(nums: number[]): number {
  let res = -1

  for (let i = 1; i < nums.length; i++) {
    for (let n = 0; n < i; n ++) {
      if (nums[i] > nums[n] && nums[i] - nums[n] > res) res = nums[i] - nums[n]
    }
  }

  return res
}

export const maximumDifference2 = function(nums: number[]): number {
  let res = -1
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(nums[i], min)
    if (nums[i] > min && nums[i] - min > res) res = nums[i] - min
  }
  return res
}
