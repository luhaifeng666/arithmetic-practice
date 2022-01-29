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
