/**
 * 将句子排序
 * @param {string} s
 * @return {string}
 */
export default function(s: string): string {
  if (!s) return ''
  const words: string[] = []
  s.split(' ').forEach((word: any) => {
    words[word.slice(-1) - 1] = word.slice(0, -1)
  })
  return words.join(' ')
}
