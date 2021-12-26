/**
 * 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const strSort = (s: string): string[] => s.split('').sort()

const isAnagram = (s: string, t: string): boolean => {
  // 如果长度不一样，则必然返回false
  if (s.length !== t.length) return false
  // 排序之后，比较每个位置上的字符是否相同，是则是true，否则返回false
  const sStrs = strSort(s)
  const tStrs = strSort(t)
  return sStrs.every((str, index) => str === tStrs[index])
}

const isAnagramByMap = (s: string, t: string): boolean => {
  // 如果长度不一样，则必然返回false
  if (s.length !== t.length) return false
  // 存出现次数的映射关系
  const map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]] -= 1
  }
  return Object.values(map).every(num => !num)
}

export {
  isAnagram,
  isAnagramByMap
}
