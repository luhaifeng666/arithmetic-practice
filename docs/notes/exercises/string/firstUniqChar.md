# 字符串中的第一个唯一字符

## 题目

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 `-1`。

#### 示例：
```
s = "leetcode"
返回 0
```

```
s = "loveleetcode"
返回 2
```

::: tip 提示： 
你可以假定该字符串只包含小写字母。
:::

## 解法一
::: tip 解题思路
创建一个哈希表，每个字母为key，由下标组成的数组为value，如果value中的数组长度为1，则返回对应的数组第一个元素。
:::

```ts
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
```

## 解法二
::: tip 解题思路
利用 `indexOf` 与 `lastIndexOf`，当第一次出现的索引与最后一次出现的索引相等时，则该索引即为我们想要的结果。
:::

```ts
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
```

