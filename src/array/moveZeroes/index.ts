/**
 * 移动零
 * 给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export default function (nums) {
  // 新建两个指针
  let l = 0
  let r = 0
  // 遍历数组，如果右指针当前的值不为0，则将左右指针的值交换，并同时移动左右指针
  for (; r < nums.length; r++) {
    if (nums[r] !== 0)  {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
    }
  }
};
