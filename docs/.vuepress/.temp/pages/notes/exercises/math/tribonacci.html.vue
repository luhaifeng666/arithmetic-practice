<template><h1 id="第-n-个泰波那契数" tabindex="-1"><a class="header-anchor" href="#第-n-个泰波那契数" aria-hidden="true">#</a> 第 N 个泰波那契数</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>泰波那契序列 Tn 定义如下：<br>
T0 = 0, T1 = 1, T2 = 1, 且在 n &gt;= 0 的条件下 <code>Tn+3 = Tn + Tn+1 + Tn+2</code><br>
给你整数 <code>n</code>，请返回第 <code>n</code> 个泰波那契数 <code>Tn</code> 的值。</p>
<p></p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 25
输出：1389537
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li>0 &lt;= n &lt;= 37</li>
<li>答案保证是一个 <code>32</code> 位整数，即 <code>answer &lt;= 2^31 - 1</code>。</li>
</ul>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>由题目可知，<code>Tn+3 = Tn + Tn+1 + Tn+2</code>，我们可以直接使用 <code>递归</code> 的思想，将公式代入即可。但是根据题目的要求，最大值为 <code>2^31 - 1</code>。如果直接这么做的话，循环会超出时间限制。<br>
我们不妨来列举一下：</p>
<ul>
<li><code>T3 = T0 + T1 + T2</code></li>
<li><code>T4 = T1 + T2 + T3</code></li>
<li><code>T5 = T2 + T3 + T4</code></li>
<li>......
不难发现的是，每次相加，总有两项的和在上一次的求和过程中是计算过的，不用重复计算，因此我们可以把公式稍稍做一下转换：</li>
<li><code>T4 = T3 - T0 + T3</code></li>
<li><code>T5 = T4 - T1 + T4</code></li>
<li>......</li>
<li><code>Tn = 2 * T(n-1) - T(n-4)</code>
这样就可以避免重复计算，随着数字的增大，减少了很多次无畏的循环，提高了性能。唯一需要注意的是，当计算 <code>T(-1)</code> 时，需要返回0。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 第 N 个泰波那契数
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">tribonacci</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token function">tribonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">tribonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
