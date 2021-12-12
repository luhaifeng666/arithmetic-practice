/**
 * 合并两个有序数组
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 删除后面的元素
  nums1.splice(m)
  // 将nums2的元素添加进来
  nums1.push(...nums2.slice(0, n))
  // 开始排序
  // nums1.sort((x, y) => x-y)
  for (let i = 0; i < nums1.length; i++) {
    for (let r = i + 1; r < nums1.length; r++) {
      if (nums1[i] > nums1[r]) [nums1[i], nums1[r]] = [nums1[r], nums1[i]]
    }
  }
}
