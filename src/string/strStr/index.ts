/**
 * 实现 strStr()
 * 给你两个字符串haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。
 * 说明：
 * 当needle是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当needle是空字符串时我们应当返回 0 。这与 C 语言的strstr()以及 Java 的indexOf()定义相符。
 */

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

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStrByIndexOf (haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

export {
  strStr,
  strStrByIndexOf
}
