/**
 * 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */

/**
 * @param {number} x
 * @return {number}
 */
function reverseByString (x: number): number {
  // 标记是否是负数
  const isNegative = x < 0
  // 翻转数字字符串
  const numberStr = (x + '').split('-').map((num:string) => {
    if (!isNaN(Number(num))) {
      return num.split('').reverse().join('')
    }
    return num
  }).join('')
  // 如果超出范围限制，返回0
  if (Number(numberStr) < Math.pow(-2, 31) || Number(numberStr) > Math.pow(2, 31) - 1) return 0
  // 如果是负数，则返回负数
  return isNegative ? 0 - Number(numberStr) : Number(numberStr)
}

/**
 * @param {number} x
 * @return {number}
 */
function reverse (x: number): number {
  let result = 0
  while (parseInt(`${x}`) !== 0) {
    result = result * 10 + parseInt(`${x}`) % 10
    x /= 10
  }
  // 如果超出范围限制，返回0
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0
  // 如果是负数，则返回负数
  return result
}

export {
  reverseByString,
  reverse
}
