# 二进制求和
## 题目
给你两个二进制字符串，返回它们的和（用二进制表示）。<br>
输入为 非空 字符串且只包含数字 1 和 0。

#### 示例 1:
```
输入: a = "11", b = "1"
输出: "100"
```

#### 示例 2:
```
输入: a = "1010", b = "1011"
输出: "10101"
```

::: tip 提示：
每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
:::

## 题解
::: tip 解题思路
- 如果给定的二进制字符串长度不一致，则先给字符串左侧补0
- 从末尾依次遍历，长度为字符串长度
- 定义进位 `compareChart`, 初始值为0，并将每位数与之进行 `异或` 操作
- 当字符串当前位都是 `1`，或者三者异或结果为1，且当前位 `异或` 结果与 `compareChart` 两者间有一个结果是1是，将 `compareChart` 设为1
- 最终如果 `compareChart` 是1，则在返回结果前拼接1
:::

```ts
/**
 * 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export default function(a: any, b: any): string {
  // 补0
  const aLength = a.length
  const bLength = b.length
  const str = '0'.repeat(Math.abs(bLength - aLength))
  if (aLength < bLength) { a = `${str}${a}` }
  if (bLength < aLength) { b = `${str}${b}` }

  let compareChart = 0
  let res = ''
  for (let i = Math.max(aLength, bLength) - 1; i > -1; i--) {
    res = `${a[i] ^ b[i] ^ compareChart}${res}`
    compareChart = (a[i] & b[i]) || (!(a[i] ^ b[i] ^ compareChart) && (compareChart || (a[i] | b[i]))) ? 1 : 0
  }
  return `${compareChart ? '1' : ''}${res}`
}
```
