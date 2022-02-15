/**
 * 最简分数
 * @param {number} n
 * @return {string[]}
 */
export default function(n: number): string[] {
  if (n < 2) return []
  // 获取最大公约数
  function getCommonDivisor(a, b) {
    while(a % b) {
      const res = a % b
      a = b
      b = res
    }
    return b
  }
  const res: string[] = []
  for (let i = 2; i <= n; i++) {
    for (let k = 1; k < i; k++) {
      const divisor = getCommonDivisor(k, i)
      if (!res.includes(`${k / divisor}/${i / divisor}`)) res.push(`${k / divisor}/${i / divisor}`)
    }
  }
  return res
}
