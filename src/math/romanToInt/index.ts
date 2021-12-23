/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
export default function(s: string): number {
  if (s.length < 1) {
    return 0
  } else {
    const chartMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    let count = 0
    for (let i = 0; i < s.length; i++) {
      if (i < s.length - 1 && chartMap[s[i]] < chartMap[s[i + 1]]) {
        count += (chartMap[s[i+1]] - chartMap[s[i]])
        i += 1
      } else {
        count += chartMap[s[i]]
      }
    }
    return count
  }
}
