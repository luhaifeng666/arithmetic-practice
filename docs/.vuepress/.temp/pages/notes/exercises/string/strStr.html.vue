<template><h1 id="实现-strstr" tabindex="-1"><a class="header-anchor" href="#实现-strstr" aria-hidden="true">#</a> 实现 strStr()</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>实现 <code>strStr()</code> 函数。<br>
给你两个字符串 <code>haystack</code> 和 <code>needle</code> ，请你在 <code>haystack</code> 字符串中找出 <code>needle</code> 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。</p>
<h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明：</h4>
<p>当 <code>needle</code> 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。<br>
对于本题而言，当 <code>needle</code> 是空字符串时我们应当返回 <code>0</code> 。这与 <code>C</code> 语言的 <code>strstr()</code> 以及 <code>Java</code> 的 <code>indexOf()</code> 定义相符。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：haystack = "hello", needle = "ll"
输出：2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：haystack = "aaaaa", needle = "bba"
输出：-1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：haystack = "", needle = ""
输出：0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>直接使用 <code>indexOf</code>，一力降十会！</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> haystack
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> needle
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">strStrByIndexOf</span> <span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> haystack<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>needle<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>将字符串按照 <code>needle</code> 进行划分。<br>
如果 <code>haystack</code> 或者 <code>needle</code> 是空串，则返回 <code>0</code>;<br>
如果分割后的数组长度为 <code>1</code> ，说明不包含这个元素，则返回 <code>-1</code>；<br>
否则返回数组第一个元素的长度即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> haystack
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> needle
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">strStr</span> <span class="token punctuation">(</span>haystack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> needle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果needle是空串，返回0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>needle <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span> haystack <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">const</span> strList <span class="token operator">=</span> haystack<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>needle<span class="token punctuation">)</span>
  <span class="token comment">// 分割后的数组长度是1，说明不存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strList<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">return</span> strList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
