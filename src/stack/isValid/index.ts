/**
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 空串也是有效的字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export default function(s: string): boolean {
  // 定义符号的Map
  const SYMBOL_MAP = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  // 空串也是有效字符串
  if (s === '') return true
  // 如果字符串长度是基数，返回false
  if (s.length % 2) return false
  // 定义堆栈列表
  let stack: Array<string> = []
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      stack.push(s[i])
    } else {
      if (s[i] !== SYMBOL_MAP[stack.pop() || '']) return false
    }
  }
  // 有没有匹配完的，返回false, 否则返回true
  return !stack.length;
};
