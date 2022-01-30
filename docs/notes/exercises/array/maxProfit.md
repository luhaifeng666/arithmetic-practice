# 买卖股票的最佳时机 II
## 题目

给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。<br>
在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

#### 示例 1:
```
输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

#### 示例 2:
```
输入: prices = [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

#### 示例 3:
```
输入: prices = [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

::: tip 提示：
1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4
:::

## 题解
### 解法一
::: tip 解题思路
利用 `动态规划` 的思想。<br>
利润分为两种情况：
1. 持有股票时的最大利润, 记为 `handInProfit`
   1. 当天有交易：如果当天有交易，说明当天买入了股票，那么此时最大的利润应该是当前卖出去累计的利润 `handOutProfit` 减去当天股票的价格
   2. 当天没有交易：如果当天没有交易，说明手中持有，那么此时最大的利润应该是当前持有股票时的最大利润 `handInProfit`
   3. 两者情况取最大值，即为持有股票的最大利润
2. 未持有股票时的最大利润，记为 `handOutProfit`
   1. 当天有交易：如果当天有交易，说明当天卖出了股票，那么最大利润应该是手中持有股票的累计利润 `handInProfit` 加上当天卖出去的价格
   2. 当天没有交易：如果当天没有交易，说明当天没有卖，那么最大利润应该是手中当前已经卖出去的累计利润 `handOutProfit`
   3. 两者情况取最大值，即为未持有股票的最大利润
最终 **手中没有持有股票** 时，利润肯定最大，所以返回 `handOutProfit` 即可。
:::

```ts
// 动态规划
export const maxProfitByDp = function(prices: number[]): number {
  if (prices.length < 1) return 0
  // 当天持有股票的最大利润
  let handInProfit = -prices[0]
  // 当天未持有股票的最大利润
  let handOutProfit = 0

  for (let i = 1; i < prices.length; i++) {
    handInProfit = Math.max(handOutProfit - prices[i], handInProfit)
    handOutProfit = Math.max(handInProfit + prices[i], handOutProfit)
  }
  // 未持有股票时利润会最大
  return handOutProfit
}
```

### 解法二
::: tip 解题思路
利用 `贪心算法` 的思想。只在涨的时候卖，即判断后一天的价格高于前一天的时候才进行买卖股票的操作，最终所有利润的和即为最大利润。
:::

```ts
// 贪心算法
export const maxProfit = function(prices: number[]): number {
  if (prices.length < 1) return 0
  let total = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) total += prices[i] - prices[i - 1]
  }
  return total
}
```
