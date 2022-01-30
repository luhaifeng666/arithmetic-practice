/**
 * @param {number[]} prices
 * @return {number}
 */
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

// 贪心算法
export const maxProfit = function(prices: number[]): number {
  if (prices.length < 1) return 0
  let total = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) total += prices[i] - prices[i - 1]
  }
  return total
}
