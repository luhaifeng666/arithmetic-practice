# 有效的括号

## 题目
给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 s ，判断字符串是否有效。<br>
有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。 
3. 空字符串也是有效字符串

#### 示例 1：
```
输入：s = "()"
输出：true
```
#### 示例 2：
```
输入：s = "()[]{}"
输出：true
```
#### 示例 3：
```
输入：s = "(]"
输出：false
```
#### 示例 4：
```
输入：s = "([)]"
输出：false
```
#### 示例 5：
```
输入：s = "{[]}"
输出：true
```

## 题解
::: tip 解题思路
主要利用 `栈` `先进后出`的特性。
1. 判断如果是空串，返回 `true`
2. 判断如果字符串的长度是奇数的话，则必然不可能成对匹配，返回 `false`
3. 遍历字符串，如果符号是左半边的符号，则存入栈内，否则从栈内取出，同时判断当前的符号与取出的符号是否匹配，不匹配的话则返回 `false`
4. 最后判断栈内是否还有没有匹配过的符号，如果有，返回 `false`，否则返回 `true`
:::

```ts
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
```


