/**
 * Fizz Buzz
 * 给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：
 * answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
 * answer[i] == "Fizz" 如果 i 是 3 的倍数。
 * answer[i] == "Buzz" 如果 i 是 5 的倍数。
 * answer[i] == i 如果上述条件全不满足。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
export default function(n: number): string[] {
  let results = ['1']
  for (let i = 2; i <= n; i++) {
    const isFizz = !(i % 3)
    const isBuzz = !(i % 5)
    if (isFizz && isBuzz) {
      results.push('FizzBuzz')
    } else if (isFizz && !isBuzz) {
      results.push('Fizz')
    } else if (isBuzz && !isFizz) {
      results.push('Buzz')
    } else {
      results.push(`${i}`)
    }
  }
  return results
}
