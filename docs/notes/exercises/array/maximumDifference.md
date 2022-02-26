# 增量元素之间的最大差值
## 题目
给你一个下标从 `0` 开始的整数数组 `nums` ，该数组的大小为 `n` ，请你计算 `nums[j] - nums[i]` 能求得的 最大差值 ，其中 `0 <= i < j < n` 且 `nums[i] < nums[j]` 。<br>
返回 `最大差值` 。如果不存在满足要求的 `i` 和 `j` ，返回 `-1` 。

 

#### 示例 1：
```
输入：nums = [7,1,5,4]
输出：4
解释：
最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。
```

#### 示例 2：
```
输入：nums = [9,4,3,2]
输出：-1
解释：
不存在同时满足 i < j 和 nums[i] < nums[j] 这两个条件的 i, j 组合。
```

#### 示例 3：
```
输入：nums = [1,5,2,10]
输出：9
解释：
最大差值出现在 i = 0 且 j = 3 时，nums[j] - nums[i] = 10 - 1 = 9 。
```

::: tip 提示：
n == nums.length
2 <= n <= 1000
1 <= nums[i] <= 10 ^ 9
:::

## 解法一
::: tip 解题思路
遍历数组，将当前项与其之前的每一项求差，保存最大差值返回即可。
:::

```ts
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
```

## 解法二
::: tip 解题思路
优化下解法一，要求得最大差值，其实就是将当前值与前项中的最小值求差，每次循环时保存最小值，然后与当前项求差即可。
:::

```ts
export const maximumDifference2 = function(nums: number[]): number {
  let res = -1
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(nums[i], min)
    if (nums[i] > min && nums[i] - min > res) res = nums[i] - min
  }
  return res
}
```
