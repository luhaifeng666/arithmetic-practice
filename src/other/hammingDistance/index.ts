/**
 * 汉明距离
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x: number, y: number): number {
  let res = x ^ y
  let count = 0
  while (res !== 0) {
    count += res & 1
    res >>= 1
  }
  return count
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistanceByString = function(x: number, y: number): number {
  return (x ^ y).toString(2).split('').filter(item => item === '1').length
}

export { hammingDistance, hammingDistanceByString }
