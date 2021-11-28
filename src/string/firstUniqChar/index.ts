/**
 * 字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s: string): number {
  const map: { [name: string]: number[] } = {}
  for (let i: number = 0; i < s.length; i++) {
    const target = map[s[i]]
    map[s[i]] = target ? [...target, i] : [i]
  }
  const vals = Object.values(map)
  for (let i = 0; i < vals.length; i++) {
    if (vals[i].length === 1) return vals[i][0]
  }
  return -1
}

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqCharByIndexOf(s: string): number {
  for (let i: number = 0; i < s.length; i++) {
    // 如果第一次出现的位置跟最后出现的位置索引值一致，那么该索引值就是我们想要的结果
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }
  return -1
}

export { firstUniqChar, firstUniqCharByIndexOf }
