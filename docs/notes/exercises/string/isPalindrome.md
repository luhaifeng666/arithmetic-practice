# 验证回文串

## 题目
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。<br>
说明：本题中，我们将空字符串定义为有效的回文串。

#### 示例 1:
```
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
```

#### 示例 2:
```
输入: "race a car"
输出: false
解释："raceacar" 不是回文串
```

## 解法一
::: tip 解题思路
利用 `双指针` 的方式。<br>
- 先通过正则表达式，将目标字符串中的特殊字符移除；
- 通过 `toLowerCase` 方法将字母转换为小写；
- 将字符串分割为数组，在头尾各放置一个指针，并遍历数组。如果左右指针指向的值都相等，则说明是回文串，否则就不是回文串。
:::

```ts
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
```

## 解法二
::: tip 解题思路
- 先通过正则表达式，将目标字符串中的特殊字符移除；
- 通过 `toLowerCase` 方法将字母转换为小写；
- 将字符串分割为数组，将数组 `reverse` 后，再 `join` 成字符串，如果跟原字符串一致，则说明是回文串，否则就不是。
:::

```ts
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
```
