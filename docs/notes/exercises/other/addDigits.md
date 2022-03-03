# 各位相加
## 题目
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

#### 示例 1:
```
输入: num = 38
输出: 2
解释: 各位相加的过程为：
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
由于 2 是一位数，所以返回 2。
```

#### 示例 2:
```
输入: num = 0
输出: 0
```

::: tip 提示：
0 <= num <= 2 ^ 31 - 1
:::

## 题解
::: tip 解题思路
利用 `递归` 的思想，将数字转为字符串，并每位相加，判断是否小于10，如果小于10则直接返回，否则继续执行。
:::

```ts
/**
 * 各位相加
 * @param {number} num
 * @return {number}
 */
export const addDigits = function(num: number): number {
  if (num < 10) return num
  return addDigits(`${num}`.split('').reduce((res, num) => res + Number(num), 0))
}
```
