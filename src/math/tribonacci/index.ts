/**
 * 第 N 个泰波那契数
 * @param {number} n
 * @return {number}
 */
export const tribonacci = function(n: number): number {
  if (n < 0) return 0
  if (n < 2) return n
  if (n === 2) return 1
  return 2 * tribonacci(n - 1) - tribonacci(n - 4)
}
