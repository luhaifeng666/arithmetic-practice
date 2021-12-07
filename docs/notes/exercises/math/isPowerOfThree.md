# 3的幂

## 题目

给定一个整数，写一个函数来判断它是否是 `3` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。<br>
整数 `n` 是 `3` 的幂次方需满足：存在整数 `x` 使得 `n == 3x`

#### 示例 1：
```
输入：n = 27
输出：true
```

#### 示例 2：
```
输入：n = 0
输出：false
```

#### 示例 3：
```
输入：n = 9
输出：true
```

#### 示例 4：
```
输入：n = 45
输出：false
```

::: tip 提示：
-2^31 <= n <= 2^31 - 1
:::


::: warning 进阶：
你能不使用循环或者递归来完成本题吗？
:::

## 解法一
::: tip 解题思路：
通过 `递归` 的方式。
- 如果输入的目标值是0，直接返回 `false`
- 否则将目标值每次与3求余。
- 如果余数是0， 则将目标值除以三，继续调用方法
- 如果余数是1，返回 `true`
- 其他情况返回 `false`
:::

```ts
/**
 * 递归的方式
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfThree(n: number): boolean {
  // 递归
  if ( n && !(n % 3)) {
    n = n / 3
    return isPowerOfThree(n)
  }
  return n === 1
}
```

## 解法二
::: tip 解题思路：
通过 [Math.log](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log#%E4%BE%8B%E5%AD%902_%E4%BD%BF%E7%94%A8math.log%E6%97%B6%E5%9F%BA%E4%BA%8E%E4%B8%8D%E5%90%8C%E7%9A%84%E5%BA%95%E6%95%B0) 方法，求得底数，并使用正则表达式 `/^[0-9]\d*$/g` 判断结果是否为整数。如果是整数，则返回 `true`，否则返回 `false`。 
:::

::: danger 注意：
js存在浮点溢出的问题，所以需要通过 `parseFloat((Math.log(n) / Math.log(3)).toFixed(10))` 的方式转换整数。<br>
其他转换方式可以[戳](https://zhuanlan.zhihu.com/p/191395766)
:::

```ts
/**
 * Math.log + 正则的方式
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfThreeByRegular(n: number): boolean {
  return /^[0-9]\d*$/g.test(`${parseFloat((Math.log(n) / Math.log(3)).toFixed(10))}`)
}
```
