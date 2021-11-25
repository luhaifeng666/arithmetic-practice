# 整数反转

## 题目
给你一个 `32` 位的有符号整数 `x` ，返回将 `x` 中的数字部分反转后的结果。<br>
如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1] ，就返回 0。<br>
假设环境不允许存储 64 位整数（有符号或无符号）。

#### 示例 1：
```
输入：x = 123
输出：321
```

#### 示例 2：
```
输入：x = -123
输出：-321
```

#### 示例 3：
```
输入：x = 120
输出：21
```

#### 示例 4：
```
输出：0
输入：x = 0
```

## 解法一
::: tip 解题思路
- 先判断是不是负数
- 将数字转成字符串，并将字符串翻转
- 将翻转后的字符串转成数字。如果是负数，则转成负数。
- 判断是否满足 [−2^31, 2^31 − 1] 这个条件，是的话返回数字，否则返回0
:::

```ts
/**
 * @param {number} x
 * @return {number}
 */
function reverseByString (x: number): number {
  // 标记是否是负数
  const isNegative = x < 0
  // 翻转数字字符串
  const numberStr = (x + '').split('-').map((num:string) => {
    if (!isNaN(Number(num))) {
      return num.split('').reverse().join('')
    }
    return num
  }).join('')
  // 如果超出范围限制，返回0
  if (Number(numberStr) < Math.pow(-2, 31) || Number(numberStr) > Math.pow(2, 31) - 1) return 0
  // 如果是负数，则返回负数
  return isNegative ? 0 - Number(numberStr) : Number(numberStr)
}
```

## 解法二
::: tip 解题思路
- 循环处理，每次取出余数，将上一次循环的结果 * 10，再加上这个余数，同时将 x 的值除以10取整
- 当 `x === 0` 的时候，跳出循环
- 判断是否满足 [−2^31, 2^31 − 1] 这个条件，是的话返回数字，否则返回0

举个 :chestnut: :
```
例如：123
第一次循环：0 * 10 + 3
第二次循环：3 * 10 + 2
第三次循环：32 * 10 + 1
```
:::
::: warning 注意
每次判断的时候需要 `parseInt` 一下，否则 `x /= 10` 之后是小数，循环会有问题。
:::

```ts
/**
 * @param {number} x
 * @return {number}
 */
function reverse (x: number): number {
  let result = 0
  while (parseInt(`${x}`) !== 0) {
    result = result * 10 + parseInt(`${x}`) % 10
    x /= 10
  }
  // 如果超出范围限制，返回0
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0
  // 如果是负数，则返回负数
  return result
}
```     
