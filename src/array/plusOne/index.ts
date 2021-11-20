/**
 * 加一
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
export default function plusOne (digits: number[]): number[] {
  // 空数组直接返回
  if (!digits.length) return []
  // 从后往前遍历
  for (let i = digits.length - 1; i >=0; i--) {
    // 如果最后一位是9，则将它变成0
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      // 否则直接+1返回
      digits[i]++
      return digits
    }
  }
  // 如果数组中都是9，则会走到这一步
  // 将所有数变成0之后，数组头部插入1即可
  digits.unshift(1)
  return digits
};
