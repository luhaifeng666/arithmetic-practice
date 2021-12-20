# 最长公共前缀

## 题目

编写一个函数来查找字符串数组中的最长公共前缀。<br>
如果不存在公共前缀，返回空字符串 `""` 。

#### 示例 1：
```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

#### 示例 2：
```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

::: tip 提示：
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
:::

## 题解
::: tip 解题思路
- 判断数组长度，如果长度小于2，则返回第一个元素或者空元素
- 否则取出第一个元素作为参照项，依次取出它的字符与数组中剩下的元素进行比对，如果一致，则添加到结果字符串中，否则直接跳出循环
:::

```ts
/**
 * @param {string[]} strs
 * @return {string}
 */
export default function (strs: string[]): string {
  let res = ''
  if (strs.length < 2) {
    res = strs[0] || ''
  } else {
    const firstItem = strs[0]
    for (let i = 0; i < firstItem.length; i++) {
      if (strs.slice(1).every(str => str[i] === firstItem[i])) {
        res += firstItem[i]
      } else {
        break
      }
    }
  }
  return res
}
```
