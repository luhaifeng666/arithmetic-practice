/**
 * 3的幂
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
 */

/**
 * 递归的方式
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfThree(n: number): boolean {
  // 递归
  if ( n && !(n % 3)) {
    n = n / 3
    return isPowerOfThree(n)
  }
  return n === 1
}

/**
 * Math.log + 正则的方式
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfThreeByRegular(n: number): boolean {
  return /^[0-9]\d*$/g.test(`${parseFloat((Math.log(n) / Math.log(3)).toFixed(10))}`)
}
