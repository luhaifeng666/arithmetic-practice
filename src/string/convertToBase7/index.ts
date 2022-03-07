/**
 * 七进制数
 * @param {number} num
 * @return {string}
 */
export default function(num: number): string {
  const nums: number[] = []
  let _num: number = num > 0 ? num : Math.abs(num)
  while(_num >= 7) {
    nums.unshift(_num % 7)
    _num = Math.floor(_num / 7)
  }
  nums.unshift(_num)
  return `${num >= 0 ? '' : '-'}${nums.join('')}`
}
