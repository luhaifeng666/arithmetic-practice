/**
 * 删除排序数组中的重复项
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * 删除排序数组中的重复项
 * @param nums
 */
export default function removeDuplicates(nums?: Array<number>): number {
  // 如果不是数组，返回0
  if (!Array.isArray(nums)) return 0
  // 如果数组长度小于2，返回数组长度
  if (nums.length < 2) return nums.length
  // 使用双指针方法原地删除元素
  let L = 0
  for (let i = 1; i < nums.length; i++) {
    // 如果左指针的值不等于右指针的值，则将左指针右移一位，并将右指针当前的值赋值给左指针的值
    if (nums[L] !== nums[i]) {
      L += 1
      nums[L] = nums[i]
    }
  }
  nums.length = L + 1
  return L + 1
}
