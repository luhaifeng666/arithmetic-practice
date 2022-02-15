<template><h1 id="买卖股票的最佳时机-ii" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机-ii" aria-hidden="true">#</a> 买卖股票的最佳时机 II</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。<br>
在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
返回 你能获得的 最大 利润 。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: prices = [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: prices = [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= prices.length &lt;= 3 * 10 ^ 4
0 &lt;= prices[i] &lt;= 10 ^ 4</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<h3 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h3>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>动态规划</code> 的思想。<br>
利润分为两种情况：</p>
<ol>
<li>持有股票时的最大利润, 记为 <code>handInProfit</code>
<ol>
<li>当天有交易：如果当天有交易，说明当天买入了股票，那么此时最大的利润应该是当前卖出去累计的利润 <code>handOutProfit</code> 减去当天股票的价格</li>
<li>当天没有交易：如果当天没有交易，说明手中持有，那么此时最大的利润应该是当前持有股票时的最大利润 <code>handInProfit</code></li>
<li>两者情况取最大值，即为持有股票的最大利润</li>
</ol>
</li>
<li>未持有股票时的最大利润，记为 <code>handOutProfit</code>
<ol>
<li>当天有交易：如果当天有交易，说明当天卖出了股票，那么最大利润应该是手中持有股票的累计利润 <code>handInProfit</code> 加上当天卖出去的价格</li>
<li>当天没有交易：如果当天没有交易，说明当天没有卖，那么最大利润应该是手中当前已经卖出去的累计利润 <code>handOutProfit</code></li>
<li>两者情况取最大值，即为未持有股票的最大利润
最终 <strong>手中没有持有股票</strong> 时，利润肯定最大，所以返回 <code>handOutProfit</code> 即可。</li>
</ol>
</li>
</ol>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 动态规划</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">maxProfitByDp</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// 当天持有股票的最大利润</span>
  <span class="token keyword">let</span> handInProfit <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">// 当天未持有股票的最大利润</span>
  <span class="token keyword">let</span> handOutProfit <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handInProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>handOutProfit <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> handInProfit<span class="token punctuation">)</span>
    handOutProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>handInProfit <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> handOutProfit<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 未持有股票时利润会最大</span>
  <span class="token keyword">return</span> handOutProfit
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h3>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>贪心算法</code> 的思想。只在涨的时候卖，即判断后一天的价格高于前一天的时候才进行买卖股票的操作，最终所有利润的和即为最大利润。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 贪心算法</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> total <span class="token operator">+=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
