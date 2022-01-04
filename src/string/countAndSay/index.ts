/**
 * 外观数列
 * @param {number} n
 * @return {string}
 */
export default function (n: number): string {
  if (n < 1) return ''
  if (n === 1) return '1'
  let str = '1'
  while (n > 1) {
    let count = 0
    let key = str[0]
    let res = ''
    for (let i = 0; i < str.length; i++) {
      if (key === str[i]) {
        count += 1
      } else {
        res += count + key
        key = str[i]
        count = 1
      }
      if (i === str.length - 1) res += count + str[i]
    }
    str = res
    n--
  }

  return str
};
