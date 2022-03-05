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
