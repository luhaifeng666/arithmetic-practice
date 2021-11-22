/**
 * 两个数组的交集 II
 * 给定两个数组，编写一个函数来计算它们的交集。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default function intersect (nums1: number[], nums2: number[]): number[] {
  // 生成map，存储每个值对应的个数
  const map = new Map()
  for(let i = 0; i < nums1.length; i++) {
    let res = map.get(nums1[i])
    map.set(nums1[i], res ? ++res : 1)
  }
  // 遍历长度较小的数组，如果在map中存在，则说明是交集数，则存入数组，并将map中对应值的数量-1
  const result: number[] = []
  for(let i = 0; i < nums2.length; i++) {
    let targetNum = map.get(nums2[i])
    if (targetNum) {
      result.push(nums2[i])
      map.set(nums2[i], --targetNum)
    }
  }
  return result
}
