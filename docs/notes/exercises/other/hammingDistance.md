# 汉明距离

## 题目

两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。<br>
给你两个整数 `x` 和 `y`，计算并返回它们之间的汉明距离。

#### 示例 1：
```
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

#### 示例 2：
```
输入：x = 3, y = 1
输出：1
```

::: tip 提示：
0 <= x, y <= 2 ^ 31 - 1
:::

## 解法一
::: tip 解题思路
通过 `位运算` 的方式解题。
- 先将两数通过 `异或` 取得结果 `res`，`res` 的二进制数中 `1` 的个数即为我们想要的结果
- 我们将 `res` 与 `1` 进行 `与` 运算，如果结果是 `1`，则说明最后一位是1
- 将 `res` 右移，并重复与 `1` 进行 `与` 运算的操作，直到 `res === 0` 为止
:::

```ts
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x: number, y: number): number {
    let res = x ^ y
    let count = 0
    while (res !== 0) {
      count += res & 1
      res >>= 1
    }
    return count
  }
```

## 解法二
::: tip 解题思路
通过js中的 `toString` 方法，将两数 `异或` 的结果转换为字符串，统计出里面 `1` 的个数即可。
:::

```ts
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistanceByString = function(x: number, y: number): number {
  return (x ^ y).toString(2).split('').filter(item => item === '1').length
}
```
