/**
 * 最长公共前缀
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
export default function (strs: string[]): string {
  let res = ''
  if (strs.length < 2) {
    res = strs[0] || ''
  } else {
    const firstItem = strs[0]
    for (let i = 0; i < firstItem.length; i++) {
      if (strs.slice(1).every(str => str[i] === firstItem[i])) {
        res += firstItem[i]
      } else {
        break
      }
    }
  }
  return res
}
