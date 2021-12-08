/**
 * 颠倒二进制位
 * 颠倒给定的 32 位无符号整数的二进制位。
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBitsByString = function(n) {
  let str = n.toString(2)
  // 补0
  if (str.length < 32) str = '0'.repeat(32 - str.length) + str
  const strList: string[] = str.split('')
  // 翻转字符串
  return parseInt(strList.reverse().join(''), 2)
};

/**
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = function(n: number): number {
  let str = n.toString(2)
  // 补0
  if (str.length < 32) str = '0'.repeat(32 - str.length) + str
  const strList: string[] = str.split('')
  // 双指针
  for (let i = 0; i < strList.length; i++) {
      if (i < strList.length - 1 - i) {
          [strList[i], strList[strList.length - 1 - i]] = [strList[strList.length - 1 - i], strList[i]]
      }
  }
  return parseInt(strList.join(''), 2)
};
