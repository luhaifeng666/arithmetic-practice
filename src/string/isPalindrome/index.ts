/**
 * 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome (s: string): boolean {
  // 如果s是空串，返回true
  if (s === '') return true
  // 将字符串中的所有其他字符转换成'' [A-Z0-9a-z]
  const _s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // 双指针
  for (let i = 0; i < _s.length; i++) {
    if (i <= s.length / 2 - 1) {
      if (_s[i] !== _s[_s.length - 1 - i]) return false
    }
  }
  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindromeByReverse (s: string): boolean {
  // 如果s是空串，返回true
  if (s === '') return true
  // 将字符串中的所有其他字符转换成'' [A-Z0-9a-z]
  const _s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  // 将字母小写，反转后合并，看看跟原先的字符串是否相等
  return _s.split('').reverse().join('') === _s
}

export {
  isPalindrome, isPalindromeByReverse
}
