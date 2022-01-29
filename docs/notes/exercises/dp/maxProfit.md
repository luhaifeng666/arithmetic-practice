# 买卖股票的最佳时机

## 题目

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。<br>
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。<br>
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

#### 示例 1：
```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

#### 示例 2：
```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

::: tip 提示：
1 <= prices.length <= 10 ^ 5
0 <= prices[i] <= 10 ^ 4
:::


## 题解
::: tip 解题思路
- 如果当前数组为空，直接返回 `0`
- 初始化最小值 `min = 0` 用于存储最低的股价
- 初始化最大收益 `max = prices[0]` 用于保存最大收益价格
- 遍历数组，如果当前项小于 `min`，则用当前项替换 `min` 的值，用当前项减去 `min` 的结果与 `max` 比较，将大的值存下来
- 返回 `max` 即可
:::

```
/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
export default function(prices: number[]): number {
  // 如果是空数组，返回0
  if (prices.length < 1) return 0
  let max = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}
```
