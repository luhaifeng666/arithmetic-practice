# 七进制数
## 题目
给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

 

#### 示例 1:
```
输入: num = 100
输出: "202"
```

#### 示例 2:
```
输入: num = -7
输出: "-10"
```

::: tip 提示：
-10 ^ 7 <= num <= 10 ^ 7
:::

## 题解
::: tip 解题思路
考虑到负数的情况，先将数字转换为正数，之后每次对 7 求余，并将数字压栈。最后将栈内的数字组合成字符串，并根据传入数字是否 >= 0判断是否要给结果加上负号。
:::

```ts
/**
 * 七进制数
 * @param {number} num
 * @return {string}
 */
export default function(num: number): string {
  const nums: number[] = []
  let _num: number = num > 0 ? num : Math.abs(num)
  while(_num >= 7) {
    nums.unshift(_num % 7)
    _num = Math.floor(_num / 7)
  }
  nums.unshift(_num)
  return `${num >= 0 ? '' : '-'}${nums.join('')}`
}
```
