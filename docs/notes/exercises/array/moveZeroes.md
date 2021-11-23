# 移动零

## 题目
给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

#### 示例:
```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

#### 说明:
```
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
```

## 题解
::: tip 解题思路
使用 `双指针`。<br>
新建两个指针，遍历数组，如果右指针当前的值不为0，则将左右指针的值交换，并同时移动左右指针，否则只移动右指针，直到结束。
:::

```ts
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export default function (nums) {
  // 新建两个指针
  let l = 0
  let r = 0
  // 遍历数组，如果右指针当前的值不为0，则将左右指针的值交换，并同时移动左右指针
  for (; r < nums.length; r++) {
    if (nums[r] !== 0)  {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
    }
  }
}
```
