<template><h1 id="杨辉三角-ii" tabindex="-1"><a class="header-anchor" href="#杨辉三角-ii" aria-hidden="true">#</a> 杨辉三角 II</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。<br>
在「杨辉三角」中，每个数是它左上方和右上方的数的和。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: rowIndex = 3
输出: [1,3,3,1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: rowIndex = 0
输出: [1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: rowIndex = 1
输出: [1,1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示:</p>
<p>0 &lt;= rowIndex &lt;= 33</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>先求出杨辉三角数组，之后返回数组最后一项即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 杨辉三角 II
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> rowIndex
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第一个是[1]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 第二个是[1, 1]</span>
      nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 剩下的计算</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">[</span>rowIndex<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></template>
