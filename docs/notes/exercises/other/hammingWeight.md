# 位1的个数

## 题目
编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 `'1'` 的个数（也被称为 `汉明重量`）。
<br>

::: tip 提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。
:::

#### 示例 1：
```
输入：00000000000000000000000000001011
输出：3
解释：输入的二进制串 00000000000000000000000000001011中，共有三位为 '1'。
```

#### 示例 2：
```
输入：00000000000000000000000010000000
输出：1
解释：输入的二进制串 00000000000000000000000010000000中，共有一位为 '1'。
```

#### 示例 3：
```
输入：11111111111111111111111111111101
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
```

::: tip 提示：
输入必须是长度为 32 的 二进制串 。
:::

## 解法一
::: tip 解题思路
利用 `右移` 的方式。<br>
每次与1进行且运算，如果结果是1，则说明当前位是1
:::

```ts
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight (n: number): number {
  // 右移运算，每次与1进行且运算，如果结果是1，则说明当前位是1
  let count = 0
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) count ++
  }
  return count
}
```

## 解法二
::: tip 解题思路
将传入的数字转换成刚2进制数字符串，然后筛选出1的个数即可。
:::

```ts
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeightByString (n: number): number {
  if (!n) return 0
  // 转换成2进制
  let str = n.toString(2)
  return str.split('').filter(num => num === '1').length
}
```