/**
 * 位1的个数
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight (n: number): number {
  // 右移运算，每次与1进行且运算，如果结果是1，则说明当前位是1
  let count = 0
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) count ++
  }
  return count
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeightByString (n: number): number {
  if (!n) return 0
  // 转换成2进制
  let str = n.toString(2)
  return str.split('').filter(num => num === '1').length
}

export { hammingWeight, hammingWeightByString }
