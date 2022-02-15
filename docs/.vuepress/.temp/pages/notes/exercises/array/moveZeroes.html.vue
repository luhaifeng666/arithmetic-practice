<template><h1 id="移动零" tabindex="-1"><a class="header-anchor" href="#移动零" aria-hidden="true">#</a> 移动零</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个数组 <code>nums</code>，编写一个函数将所有 <code>0</code> 移动到数组的末尾，同时保持非零元素的相对顺序。</p>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>使用 <code>双指针</code>。<br>
新建两个指针，遍历数组，如果右指针当前的值不为0，则将左右指针的值交换，并同时移动左右指针，否则只移动右指针，直到结束。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 新建两个指针</span>
  <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 遍历数组，如果右指针当前的值不为0，则将左右指针的值交换，并同时移动左右指针</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> r <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">]</span>
      l<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
