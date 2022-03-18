# 旋转数组

## 题目
给你一个数组，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。

#### 示例 1:
```
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
```

#### 示例 2:
```
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
```

::: tip 提示：
- `1 <= nums.length <= 105`
- `-231 <= nums[i] <= 231 - 1`
- `0 <= k <= 105`
:::

::: tip 进阶：
- 尽可能想出更多的解决方案，至少有 `三种` 不同的方法可以解决这个问题。
- 你可以使用空间复杂度为 `O(1)` 的 原地 算法解决这个问题吗？
:::

::: warning 注意：
解这道题时，需要注意传入的 `k` 值，这个值是可能 `>=` 数组的长度的。需要先做 `取余` 操作
:::

## 解法一
取出需要翻转的数字，插入数组头部。

::: tip 解题思路
将需要旋转的元素从数组中取出来，再插入到数组头部。
:::

```ts
/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate (nums: number[], k: number): void {
  // 空数组，或者nums.length可以被k整除，则返回原数组
  const times = k % nums.length
  // 将需要旋转的数字整体取出，插入到数组开头
  nums.unshift(...nums.splice(nums.length - times, times))
}
```

## 解法二
通过整体翻转再局部翻转的方式旋转

::: tip 解题思路
先整体翻转，再翻转需要旋转的数字以及不需要旋转的数字。
:::

```ts
/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateByReverse (nums: number[], k: number):void {
  const times = k % nums.length
  // 通过翻转数组的方式，先整体翻转，再翻转需要旋转的数字以及不需要旋转的数字
  reverse(nums, 0, nums.length)
  reverse(nums, 0, times)
  reverse(nums, times, nums.length)
}

const reverse = function (nums: number[], start: number, end: number): void {
  for (let i = start; i < end - 1; i++) {
    if (i < end - 1 - i + start) {
      [nums[i], nums[end - 1 - i + start]] = [nums[end - 1 - i + start], nums[i]]
      continue
    }
    break
  }
}
```

## 解法三
通过临时数组存储的方式旋转。

::: tip 解题思路
先将传入的数组缓存起来，然后再依次将值替换到原数组对应的位置。<br>
**这里需要注意的是需要使用 `拷贝` 的方式保存，不然会改变原数组，影响结果。**
:::

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateByTemp (nums: number[], k: number):void {
  const times = k % nums.length
  const tempNums = [...nums]
  for (let i = 0; i < times; i++) {
    nums[i] = tempNums[tempNums.length - times + i]
  }
  for (let i = 0; i < nums.length - times; i++) {
    nums[i + times] = tempNums[i]
  }
}
```
