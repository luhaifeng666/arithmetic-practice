/**
 * @param {string} s
 * @return {string}
 */
export default function(s: string): string {
  // 不带符号的字符串集合
  const charList = (s.match(/[A-Z]|[a-z]/g) || []).reverse()

  // 符号的位置
  const symbols = s.split('').reduce((arr: { char: string, index: number}[], char, index) => {
    if (!/[A-Z]|[a-z]/.test(char)) {
      arr.push({ char, index })
    }
    return arr
  }, [])

  // 对应位置插入字符
  symbols.forEach(({ char, index }) => charList.splice(index, 0, char))

  return charList.join('')
}
