# 有效的字母异位词

## 题目
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。<br>
::: warning 注意：
若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
:::

#### 示例 1:
```
输入: s = "anagram", t = "nagaram"
输出: true
```

#### 示例 2:
```
输入: s = "rat", t = "car"
输出: false
```

::: tip 提示:
1 <= s.length, t.length <= 5 * 10 ^ 4
s 和 t 仅包含小写字母
:::

## 解法一
::: tip 解题思路
- 先将两个字符串进行排序
- 然后比对每一位上的字符是否相等，如果其中一位不相等，则是 `false`, 否则为 `true`
:::

```ts
const strSort = (s: string): string[] => s.split('').sort()

const isAnagram = (s: string, t: string): boolean => {
  // 如果长度不一样，则必然返回false
  if (s.length !== t.length) return false
  // 排序之后，比较每个位置上的字符是否相同，是则是true，否则返回false
  const sStrs = strSort(s)
  const tStrs = strSort(t)
  return sStrs.every((str, index) => str === tStrs[index])
}
```

## 解法二
::: tip 解题思路
- 将字符串出现的字符及对应出现的次数存成对象
- 之后用另一个字符串遍历与之比对，如果出现的次数一致，则为 `true`, 否则为 `false`
:::

```ts
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
```
