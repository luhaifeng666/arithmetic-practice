# Excel表列名称
## 题目
给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

#### 例如：
```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

#### 示例 1：
```
输入：columnNumber = 1
输出："A"
```

#### 示例 2：
```
输入：columnNumber = 28
输出："AB"
```

#### 示例 3：
```
输入：columnNumber = 701
输出："ZY"
```

#### 示例 4：
```
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

::: tip 提示：
1 <= columnNumber <= 2 ^ 31 - 1
:::


## 题解
::: tip 解题思路
每次对26求余，并转成字母对应的code，然后压栈，重复这个过程，直到最后给定的数字为0。
:::

```ts
/**
 * Excel表列名称
 * @param {number} columnNumber
 * @return {string}
 */
export default function(columnNumber: number): string {
  const list: number[] = []
  while (columnNumber > 0 ) {
    const codeNumber: number = columnNumber % 26
    list.unshift((codeNumber || 26) + 64)
    columnNumber = Math.floor((columnNumber - (codeNumber || 26)) / 26)
  }
  return String.fromCharCode.apply(null, list)
}
```
