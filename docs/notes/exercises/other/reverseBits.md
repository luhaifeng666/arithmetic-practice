# 颠倒二进制位

## 题目

颠倒给定的 32 位无符号整数的二进制位。

::: tip 提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 `示例 2` 中，输入表示有符号整数 `-3`，输出表示有符号整数 `-1073741825`。
:::

#### 示例 1：
```
输入：`n = 00000010100101000001111010011100` <br>
输出：`964176192` (00111001011110000010100101000000) <br>
解释：输入的二进制串 `00000010100101000001111010011100` 表示无符号整数 `43261596`，<br>
因此返回 `964176192`，其二进制表示形式为 `00111001011110000010100101000000`。
```

#### 示例 2：
```
输入：`n = 11111111111111111111111111111101`
输出：`3221225471` (10111111111111111111111111111111)
解释：输入的二进制串 `11111111111111111111111111111101` 表示无符号整数 `4294967293`，
因此返回 `3221225471` 其二进制表示形式为 `10111111111111111111111111111111` 。
```

::: tip 提示：
输入是一个长度为 `32` 的二进制字符串
:::

## 解法一
::: tip 解题思路
将传入的数字转换为二进制格式，如果不足32位，则前面空余的位置用0补齐。<br>
之后将二进制转换为字符串格式，并通过翻转字符串的方式，将最终结果重新转换为数字即可。
:::

```ts
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBitsByString = function(n) {
  let str = n.toString(2)
  // 补0
  if (str.length < 32) str = '0'.repeat(32 - str.length) + str
  const strList: string[] = str.split('')
  // 翻转字符串
  return parseInt(strList.reverse().join(''), 2)
};
```

## 解法二
::: tip 解题思路
利用 `双指针` 的方式。<br>
将传入的数字转换为二进制格式，如果不足32位，则前面空余的位置用0补齐。<br>
将二进制字符串转换为数组，在头尾各放置一个指针，遍历数组，交换头尾指针的值。<br>
将转换完成的数组变成字符串，并重新转换为数字即可。
:::

```ts
/**
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = function(n: number): number {
  let str = n.toString(2)
  // 补0
  if (str.length < 32) str = '0'.repeat(32 - str.length) + str
  const strList: string[] = str.split('')
  // 双指针
  for (let i = 0; i < strList.length; i++) {
      if (i < strList.length - 1 - i) {
          [strList[i], strList[strList.length - 1 - i]] = [strList[strList.length - 1 - i], strList[i]]
      }
  }
  return parseInt(strList.join(''), 2)
};
```
