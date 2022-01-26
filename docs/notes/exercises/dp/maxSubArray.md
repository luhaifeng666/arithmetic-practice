# 最大子序和
## 题目
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。

#### 示例 1：
```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

#### 示例 2：
```
输入：nums = [1]
输出：1
```

#### 示例 3：
```
输入：nums = [5,4,-1,7,8]
输出：23
```

::: tip 提示：
1 <= nums.length <= 10 ^ 5
-10 ^ 4 <= nums[i] <= 10 ^ 4
:::

## 题解
::: tip 解题思路
利用`动态规划`解决<br>
我们先来了解一下动态规划的几个步骤
1. 确定状态
定义dp[i]表示数组中前i+1（注意这里的i是从0开始的）个元素构成的连续子数组的最大和。
2. 找到转移公式
如果要计算前i+1个元素构成的连续子数组的最大和，也就是计算dp[i]，只需要判断dp[i-1]是大于0还是小于0。如果dp[i-1]大于0，就继续累加，dp[i]=dp[i-1]+num[i]。如果dp[i-1]小于0，我们直接把前面的舍弃，也就是说重新开始计算，否则会越加越小的，直接让dp[i]=num[i]。所以转移公式如下
dp[i]=num[i]+max(dp[i-1],0);
3. 确定初始条件以及边界条件
边界条件判断，当i等于0的时候，也就是前1个元素，他能构成的最大和也就是他自己，所以 `dp[0]=num[0]`
:::

```ts
/**
 * 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
export default function(nums: number[]): number {
  if (nums.length < 1) return 0
  if (nums.length < 2) return nums[0]
  let sum = nums[0]
  let max = sum
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum, 0) + nums[i]
    max = Math.max(max, sum)
  }
  return max
}
```
