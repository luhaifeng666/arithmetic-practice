/**
 * 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default function(nums1: number[], nums2: number[]):number[] {
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]
  return nums1.reduce((arr:number[], num) => {
    if (nums2.includes(num)) arr.push(num)
    return arr
  }, [])
}
