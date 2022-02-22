# 两个数组的交集
## 题目
给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

#### 示例 1：
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

#### 示例 2：
```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

::: tip 提示：
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
:::

## 题解
::: tip 解题思路
将两个数组分别去重，然后遍历其中一个数组，判断元素是否存在于另一个数组中。返回存在的元素构成的数组即可。
:::

```ts
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
```
