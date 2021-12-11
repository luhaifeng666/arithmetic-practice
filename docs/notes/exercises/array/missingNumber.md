# 缺失数字

## 题目

给定一个包含 `[0, n]` 中 `n` 个数的数组 `nums` ，找出 `[0, n]` 这个范围内没有出现在数组中的那个数。

#### 示例 1：
```
输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 2：
```
输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 3：
```
输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
```

#### 示例 4：
```
输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
```

::: tip 提示：
- n == nums.length
- 1 <= n <= 10 ^ 4
- 0 <= nums[i] <= n
- `nums` 中的所有数字都 独一无二
:::

::: warning 进阶： 
你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
:::

## 解法一
::: tip 解题思路
通过 `排序` 的方式。
- 先将数组排序
- 遍历数组，用下标与对应的数字进行比对
  - 如果相同，则跳过；
  - 如果不同，根据下标判断返回的值，下标是0，则直接返回，否则返回 `当前值 - 1`；
  - 若遍历结束，则直接返回数组长度
:::

```ts
/**
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumberBySort = function(nums: number[]): number {
  const sortNum = nums.sort((x, y) => x - y)
  const res = sortNum.filter((item, index) => item !== index)
  if (res.length) return res[0] ? res[0] - 1 : 0
  return nums.length
};
```

## 解法二
::: tip 解题思路
通过 `位运算` 的方式。<br>
`异或` 的方式是将目标数转为 `二进制` 数，逐位比较，不足的位数前面补0。具体的规则如下：
- 1 ^ 0 = 1
- 1 ^ 1 = 0
- 0 ^ 1 = 1
- 0 ^ 0 = 0
  <br>
  即：相同结果为0，不同结果为1。且 `异或` 有交换的规律： <br>
- a ^ b ^ c = a ^ c ^ b <br>
所以这道题可以通过异或的方式去重，最后与数组长度进行比较，如果都是重复的值，则返回数组长度，否则返回对应的值。
:::

```ts
/**
 * 位运算
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function(nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i]
  }
  return res ^ nums.length
};
```

## 解法三
::: tip 解题思路
通过 `求和` 的方式。
- 求得所有数的和。由于数据是等差数列，且从0开始，所以算上缺失数字的和为 `((0 + nums.length) * (nums.length + 1)) / 2`
- 遍历求差，差为结果
:::

```ts
/**
 * 求和
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumberBySum = function(nums: number[]): number {
  // 求和
  const length = nums.length
  const sum = (length * (length + 1)) / 2
  return nums.reduce((res, num) => res - num, sum)
};

```
