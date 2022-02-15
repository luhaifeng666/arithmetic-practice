<template><h1 id="买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机" aria-hidden="true">#</a> 买卖股票的最佳时机</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。<br>
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。<br>
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= prices.length &lt;= 10 ^ 5
0 &lt;= prices[i] &lt;= 10 ^ 4</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>如果当前数组为空，直接返回 <code>0</code></li>
<li>初始化最小值 <code>min = 0</code> 用于存储最低的股价</li>
<li>初始化最大收益 <code>max = prices[0]</code> 用于保存最大收益价格</li>
<li>遍历数组，如果当前项小于 <code>min</code>，则用当前项替换 <code>min</code> 的值，用当前项减去 <code>min</code> 的结果与 <code>max</code> 比较，将大的值存下来</li>
<li>返回 <code>max</code> 即可</li>
</ul>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
export default function(prices: number[]): number {
  // 如果是空数组，返回0
  if (prices.length &lt; 1) return 0
  let max = 0
  let min = prices[0]
  for (let i = 1; i &lt; prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
