/**
 * 计数质数
 */

/**
 * @param {number} n
 * @return {number}
 */
export default function(n: number): number {
  const list = new Array(n).fill(true)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (list[i]) {
      count++
      for(let j = 2*i; j < n;j+=i) {
        list[j] = false
      }
    }
  }
  return count
}
