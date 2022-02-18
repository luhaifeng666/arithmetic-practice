/**
 * 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export default function(a: any, b: any): string {
  // 补0
  const aLength = a.length
  const bLength = b.length
  const str = '0'.repeat(Math.abs(bLength - aLength))
  if (aLength < bLength) { a = `${str}${a}` }
  if (bLength < aLength) { b = `${str}${b}` }

  let compareChart = 0
  let res = ''
  for (let i = Math.max(aLength, bLength) - 1; i > -1; i--) {
    res = `${a[i] ^ b[i] ^ compareChart}${res}`
    compareChart = (a[i] & b[i]) || (!(a[i] ^ b[i] ^ compareChart) && (compareChart || (a[i] | b[i]))) ? 1 : 0
  }
  return `${compareChart ? '1' : ''}${res}`
};
