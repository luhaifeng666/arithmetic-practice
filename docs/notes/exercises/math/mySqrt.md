# x 的平方根 
## 题目
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。<br>
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。<br>
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

#### 示例 1：
```
输入：x = 4
输出：2
```

#### 示例 2：
```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

::: tip 提示：
0 <= x <= 2 ^ 31 - 1
:::

## 题解
::: tip 解题思路
:::

```ts
/**
 * x 的平方根
 * @param {number} x
 * @return {number}
 */
export default function(x: number): number {
  let min = 0
  let max = x
  let res = 0
  while (min <= max) {
    const half = Math.floor((min + max) / 2)
    if (half * half <= x) {
      res = half
      min = half + 1
    } else {
      max = half - 1
    }
  }
  return res
}
```
