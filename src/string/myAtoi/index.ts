/**
 * 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
export default function(s: string): number {
  const rule = /^\s*[\-|+]?\d+/
  // 如果首位不是符合条件的数字，直接返回0
  if (s.search(rule) < 0) return 0
  // 返回第一个匹配的值
  // @ts-ignore
  const number = Number(s.match(rule)[0])
  if (number < -Math.pow(2, 31)) return -Math.pow(2, 31)
  if (number > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return number
};
