# 学生分数的最小差值
## 题目

给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。<br>
从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。<br>
返回可能的 最小差值 。

#### 示例 1：
```
输入：nums = [90], k = 1
输出：0
解释：选出 1 名学生的分数，仅有 1 种方法：
- [90] 最高分和最低分之间的差值是 90 - 90 = 0
  可能的最小差值是 0
```

#### 示例 2：
```
输入：nums = [9,4,1,7], k = 2
输出：2
解释：选出 2 名学生的分数，有 6 种方法：
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 4 = 5
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 1 = 8
- [9,4,1,7] 最高分和最低分之间的差值是 9 - 7 = 2
- [9,4,1,7] 最高分和最低分之间的差值是 4 - 1 = 3
- [9,4,1,7] 最高分和最低分之间的差值是 7 - 4 = 3
- [9,4,1,7] 最高分和最低分之间的差值是 7 - 1 = 6
  可能的最小差值是 2
```

::: tip 提示：
1 <= k <= nums.length <= 1000
0 <= nums[i] <= 105
:::

## 题解
::: tip 解题思路
- 先将数组排序
- 遍历数组，找出所有可能性，并将最大值与最小值的差存下来
- 返回差值中的最小值
:::

```ts
/**
 * 学生分数的最小差值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export default function(nums: number[], k: number): number {
  // 只挑一个成绩的时候，最小值为0
  if (nums.length < 2 || k < 2) return 0
  // 排序
  nums.sort((pre, next) => pre - next)
  // 遍历
  const diffs: number[] = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    const resets: number[] = nums.slice(i + 1)
    for (let n = 0; n < resets.length - k + 2; n++) {
      const arr = resets.slice(n, n + k - 1)
      diffs.push(resets[k - 2] - nums[i])
    }
  }
  return Math.min(...diffs)
}
```
