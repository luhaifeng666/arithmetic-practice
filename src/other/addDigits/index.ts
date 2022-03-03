/**
 * 各位相加
 * @param {number} num
 * @return {number}
 */
export const addDigits = function(num: number): number {
  if (num < 10) return num
  return addDigits(`${num}`.split('').reduce((res, num) => res + Number(num), 0))
}
