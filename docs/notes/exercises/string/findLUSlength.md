# 最长特殊序列 Ⅰ
## 题目

## 题解
::: tip 解题思路
无非三种情况：
- a 与 b 长度不相等时，返回长度较长的值
- a 与 b 长度相等时
  - a === b，则返回 -1
  - a !== b，则返回a 或 b 的长度即可
:::

```ts
/**
 * 最长特殊序列 Ⅰ
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export default function(a: string, b: string): number {
  const lengthA = a.length
  const lengthB = b.length
  if (lengthA !== lengthB) {
    return Math.max(lengthA, lengthB)
  } else {
    return a === b ? -1 : a.length
  }
}
```
