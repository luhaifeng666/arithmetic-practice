# 最后一个单词的长度
## 题目
给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。<br>
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

#### 示例 1：
```
输入：s = "Hello World"
输出：5
```

#### 示例 2：
```
输入：s = "   fly me   to   the moon  "
输出：4
```

#### 示例 3：
```
输入：s = "luffy is still joyboy"
输出：6
```

::: tip 提示：
1 <= s.length <= 10 ^ 4
s 仅有英文字母和空格 ' ' 组成
s 中至少存在一个单词
:::

## 题解
::: tip 解题思路
- 移除前后空格
- 按空格拆分
- 取最后一个字符串，返回其长度即可
:::

```ts
/**
 * @param {string} s
 * @return {number}
 */
export default function(s: string): number {
  return s.trim().split(' ').slice(-1)[0].length
}
```
