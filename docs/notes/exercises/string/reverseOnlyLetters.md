# 仅仅反转字母
## 题目
给你一个字符串 s ，根据下述规则反转字符串：

- 所有非英文字母保留在原有位置。
- 所有英文字母（小写或大写）位置反转。
- 返回反转后的 s 。

 

示例 1：
```
输入：s = "ab-cd"
输出："dc-ba"
```

示例 2：
```
输入：s = "a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
```

示例 3：
```
输入：s = "Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
```

::: tip 提示
- 1 <= s.length <= 100
- s 仅由 ASCII 值在范围 [33, 122] 的字符组成
- s 不含 '\"' 或 '\\'
:::

## 题解
::: tip 解题思路
- 将字母部分翻转
- 记录下非字母的索引
- 插入翻转后的字符数组对应位置
- 返回join的结果
:::

```ts
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
```
