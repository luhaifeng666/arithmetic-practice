/**
 * 多数元素
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums: number[]): number {
  const map = {}
  for (const num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1
  }
  const keys = Object.keys(map)
  for (let i = 0; i < Object.keys(map).length; i++) {
    if (map[keys[i]] > nums.length / 2) return Number(keys[i])
  }
  return 0
}

export const majorityElementBySort = function(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}
