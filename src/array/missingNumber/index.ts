/**
 * 缺失数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 */

/**
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumberBySort = function(nums: number[]): number {
  const sortNum = nums.sort((x, y) => x - y)
  const res = sortNum.filter((item, index) => item !== index)
  if (res.length) return res[0] ? res[0] - 1 : 0
  return nums.length
};

/**
 * 位运算
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function(nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i]
  }
  return res ^ nums.length
};

/**
 * 求和
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumberBySum = function(nums: number[]): number {
  // 求和
  const length = nums.length
  const sum = (length * (length + 1)) / 2
  return nums.reduce((res, num) => res - num, sum)
};
