/**
 * x 的平方根
 * @param {number} x
 * @return {number}
 */
export default function(x: number): number {
  let min = 0
  let max = x
  let res = 0
  while (min <= max) {
    const half = Math.floor((min + max) / 2)
    if (half * half <= x) {
      res = half
      min = half + 1
    } else {
      max = half - 1
    }
  }
  return res
}
