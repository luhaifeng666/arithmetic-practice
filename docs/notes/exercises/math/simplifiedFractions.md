# 最简分数
## 题目
给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

#### 示例 1：
```
输入：n = 2
输出：["1/2"]
解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
```

#### 示例 2：
```
输入：n = 3
输出：["1/2","1/3","2/3"]
```

#### 示例 3：
```
输入：n = 4
输出：["1/2","1/3","1/4","2/3","3/4"]
解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。
```

#### 示例 4：
```
输入：n = 1
输出：[]
```

::: tip 提示：
1 <= n <= 100
:::

## 题解
::: tip 解题思路
- 如果提供的数字小于2，直接返回空数组
- 循环，分别取得分母与分子，并求出两者的最大公约数，约分后，判断数组中是否存在，不存在则存入数组
- 返回数组
:::

```ts
/**
 * 最简分数
 * @param {number} n
 * @return {string[]}
 */
export default function(n: number): string[] {
  if (n < 2) return []
  // 获取最大公约数
  function getCommonDivisor(a, b) {
    while(a % b) {
      const res = a % b
      a = b
      b = res
    }
    return b
  }
  const res: string[] = []
  for (let i = 2; i <= n; i++) {
    for (let k = 1; k < i; k++) {
      const divisor = getCommonDivisor(k, i)
      if (!res.includes(`${k / divisor}/${i / divisor}`)) res.push(`${k / divisor}/${i / divisor}`)
    }
  }
  return res
}
```
