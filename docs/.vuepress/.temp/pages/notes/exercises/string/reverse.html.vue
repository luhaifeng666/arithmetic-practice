<template><h1 id="整数反转" tabindex="-1"><a class="header-anchor" href="#整数反转" aria-hidden="true">#</a> 整数反转</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个 <code>32</code> 位的有符号整数 <code>x</code> ，返回将 <code>x</code> 中的数字部分反转后的结果。<br>
如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1] ，就返回 0。<br>
假设环境不允许存储 64 位整数（有符号或无符号）。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：x = 123
输出：321
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：x = -123
输出：-321
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：x = 120
输出：21
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输出：0
输入：x = 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>先判断是不是负数</li>
<li>将数字转成字符串，并将字符串翻转</li>
<li>将翻转后的字符串转成数字。如果是负数，则转成负数。</li>
<li>判断是否满足 [−2^31, 2^31 − 1] 这个条件，是的话返回数字，否则返回0</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">reverseByString</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 标记是否是负数</span>
  <span class="token keyword">const</span> isNegative <span class="token operator">=</span> x <span class="token operator">&lt;</span> <span class="token number">0</span>
  <span class="token comment">// 翻转数字字符串</span>
  <span class="token keyword">const</span> numberStr <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果超出范围限制，返回0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>numberStr<span class="token punctuation">)</span> <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">Number</span><span class="token punctuation">(</span>numberStr<span class="token punctuation">)</span> <span class="token operator">></span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// 如果是负数，则返回负数</span>
  <span class="token keyword">return</span> isNegative <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>numberStr<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Number</span><span class="token punctuation">(</span>numberStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>循环处理，每次取出余数，将上一次循环的结果 * 10，再加上这个余数，同时将 x 的值除以10取整</li>
<li>当 <code>x === 0</code> 的时候，跳出循环</li>
<li>判断是否满足 [−2^31, 2^31 − 1] 这个条件，是的话返回数字，否则返回0</li>
</ul>
<p>举个 🌰 :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>例如：123
第一次循环：0 * 10 + 3
第二次循环：3 * 10 + 2
第三次循环：32 * 10 + 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>每次判断的时候需要 <code>parseInt</code> 一下，否则 <code>x /= 10</code> 之后是小数，循环会有问题。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">reverse</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> result <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span>
    x <span class="token operator">/=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果超出范围限制，返回0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">||</span> result <span class="token operator">></span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// 如果是负数，则返回负数</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
