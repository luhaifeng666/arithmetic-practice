<template><h1 id="汉明距离" tabindex="-1"><a class="header-anchor" href="#汉明距离" aria-hidden="true">#</a> 汉明距离</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。<br>
给你两个整数 <code>x</code> 和 <code>y</code>，计算并返回它们之间的汉明距离。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：x = 3, y = 1
输出：1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>0 &lt;= x, y &lt;= 2 ^ 31 - 1</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>通过 <code>位运算</code> 的方式解题。</p>
<ul>
<li>先将两数通过 <code>异或</code> 取得结果 <code>res</code>，<code>res</code> 的二进制数中 <code>1</code> 的个数即为我们想要的结果</li>
<li>我们将 <code>res</code> 与 <code>1</code> 进行 <code>与</code> 运算，如果结果是 <code>1</code>，则说明最后一位是1</li>
<li>将 <code>res</code> 右移，并重复与 <code>1</code> 进行 <code>与</code> 运算的操作，直到 <code>res === 0</code> 为止</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> y
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">hammingDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> x <span class="token operator">^</span> y
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>res <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count <span class="token operator">+=</span> res <span class="token operator">&amp;</span> <span class="token number">1</span>
      res <span class="token operator">>>=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>通过js中的 <code>toString</code> 方法，将两数 <code>异或</code> 的结果转换为字符串，统计出里面 <code>1</code> 的个数即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> y
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">hammingDistanceByString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item <span class="token operator">===</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
