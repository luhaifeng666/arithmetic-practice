# 外观数列

## 题目
给定一个正整数 n ，输出外观数列的第 n 项。<br>
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。<br>
你可以将其视作是由递归公式定义的数字字符串序列：
- countAndSay(1) = "1"
- countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：
```
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。

```

例如，数字字符串 "3322251" 的描述如下图：
![外观数列](https://pic.leetcode-cn.com/1629874763-TGmKUh-image.png)

#### 示例 1：
```
输入：n = 1
输出："1"
解释：这是一个基本样例。
```

#### 示例 2：
```
输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
```

::: tip 提示：
1 <= n <= 30
:::

## 题解
::: tip 解题思路
- 如果传入 `0`， 返回空串
- 如果传入 `1`， 返回 `'1'`
- 利用 `双指针` 思路，遍历字符串，与左指针指向的字符进行比较，如果相同，计数器+1，否则拼接 `当前计数器+当前字符` ，清空计数器，移动左指针至当前字符
- 再利用 `递归` 的思想重复上面的遍历步骤，制止结束即可
:::

```ts
/**
 * 外观数列
 * @param {number} n
 * @return {string}
 */
export default function (n: number): string {
  if (n < 1) return ''
  if (n === 1) return '1'
  let str = '1'
  while (n > 1) {
    let count = 0
    let key = str[0]
    let res = ''
    for (let i = 0; i < str.length; i++) {
      if (key === str[i]) {
        count += 1
      } else {
        res += count + key
        key = str[i]
        count = 1
      }
      if (i === str.length - 1) res += count + str[i]
    }
    str = res
    n--
  }

  return str
}
```