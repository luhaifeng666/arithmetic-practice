# 实现 strStr()

## 题目
实现 `strStr()` 函数。<br>
给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

#### 说明：
当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。<br>
对于本题而言，当 `needle` 是空字符串时我们应当返回 `0` 。这与 `C` 语言的 `strstr()` 以及 `Java` 的 `indexOf()` 定义相符。

#### 示例 1：
```
输入：haystack = "hello", needle = "ll"
输出：2
```
#### 示例 2：
```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```
#### 示例 3：
```
输入：haystack = "", needle = ""
输出：0
```

## 解法一
::: tip 解题思路
直接使用 `indexOf`，一力降十会！
:::

```ts
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStrByIndexOf (haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}
```

## 解法二
::: tip 解题思路
将字符串按照 `needle` 进行划分。<br>
如果 `haystack` 或者 `needle` 是空串，则返回 `0`;<br>
如果分割后的数组长度为 `1` ，说明不包含这个元素，则返回 `-1`；<br>
否则返回数组第一个元素的长度即可。
:::

```ts
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr (haystack: string, needle: string): number {
  // 如果needle是空串，返回0
  if (needle === '' || haystack === '') return 0
  const strList = haystack.split(needle)
  // 分割后的数组长度是1，说明不存在
  if (strList.length === 1) return - 1
  return strList[0].length
}
```
