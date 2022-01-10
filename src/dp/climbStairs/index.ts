/**
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */

export default function(n: number): number {
  const steps = [1, 2]
  const getRes = () => {
    if (n < 3) {
      return n
    } else {
      for (let i = 3; i <= n; i++) {
        steps.push(steps[i - 2] + steps[i - 3])
      }
      return steps[steps.length - 1]
    }
  }
  return getRes()
}
