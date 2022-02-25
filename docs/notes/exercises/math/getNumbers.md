# 复数乘法
## 题目

复数 可以用字符串表示，遵循 `"实部+虚部i"` 的形式，并满足下述条件：
 - 实部 是一个整数，取值范围是 [-100, 100]
 - 虚部 也是一个整数，取值范围是 [-100, 100]
 - i ^ 2 == -1
给你两个字符串表示的复数 `num1` 和 `num2` ，请你遵循复数表示形式，返回表示它们乘积的字符串。

 

#### 示例 1：
```
输入：num1 = "1+1i", num2 = "1+1i"
输出："0+2i"
解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
```

#### 示例 2：
```
输入：num1 = "1+-1i", num2 = "1+-1i"
输出："0+-2i"
解释：(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。
```

::: tip 提示：
num1 和 num2 都是有效的复数表示。
:::

## 题解
::: tip 解题思路
- 先将给定的字符串进行拆分，得到实数与虚数
- 分别定义最后表达式的实部 `real` 与虚部 `virtual`
- 利用双重循环，各项依次相乘
  - 如果都是实数，则与 `real` 求和并保存
  - 如果都是虚数，则先将表达式中的数字相乘，再乘以 -1，最终与 `real` 求和并保存
  - 如果一实一虚，则将数字的乘积与 `virtual` 求和并保存
- 最终返回 `real + virtual + i` 的形式即可
:::

```ts
/**
 * 复数乘法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function getNumbers (num) {
  const list = num.split('+')
  if (list.length < 2) {
    list.push(0)
  }
  return list
}

export default function(num1: string, num2: string): string {
  const nums1 = getNumbers(num1)
  const nums2 = getNumbers(num2)
  let real = 0
  let virtual = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let n = 0; n < nums2.length; n++) {
      const isNumber1 = !isNaN(nums1[i])
      const isNumber2 = !isNaN(nums2[n])
      // 都是数字
      if (isNumber1 && isNumber2) {
        real += nums1[i] * nums2[n]
      }
      // 其中一个是虚数
      if ((!isNumber1 && isNumber2) || (isNumber1 && !isNumber2)) {
        virtual += (nums1[i].split('i')[0] || 1) * (nums2[n].split('i')[0] || 1)
      }
      // 都是虚数
      if (!isNumber1 && !isNumber2) {
        real += (nums1[i].split('i')[0] || 1) * (nums2[n].split('i')[0] || 1) * -1
      }
    }
  }
  return `${real}+${virtual}i`
}
```
