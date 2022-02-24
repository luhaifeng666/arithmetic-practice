# 多数元素
## 题目
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 `⌊ n/2 ⌋`  的元素。<br>
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

#### 示例 1：
```
输入：[3,2,3]
输出：3
```

#### 示例 2：
```
输入：[2,2,1,1,1,2,2]
输出：2
```

## 解法一
::: tip 解题思路
遍历数组，以数组中的值为 key，出现的次数为 value，保存到 map 中，最终返回 value 值大于数组长度一般的 key 即可。
:::

```ts
/**
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
```

## 解法二
::: tip 解题思路
先将数组排序。因为一定存在多数元素，直接返回排序后数组中间的元素即可。
:::

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElementBySort = function(nums: number[]): number {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}
```
