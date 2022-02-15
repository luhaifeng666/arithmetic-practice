<template><h1 id="合并两个有序数组" tabindex="-1"><a class="header-anchor" href="#合并两个有序数组" aria-hidden="true">#</a> 合并两个有序数组</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你两个按 非递减顺序 排列的整数数组 <code>nums1</code> 和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。<br>
请你 合并 <code>nums2</code> 到 <code>nums1</code> 中，使合并后的数组同样按 <code>非递减顺序</code> 排列。<br></p>
<div class="custom-container warning"><p class="custom-container-title">注意：</p>
<p>最终，合并后数组不应由函数返回，而是存储在数组 <code>nums1</code> 中。为了应对这种情况，<code>nums1</code> 的初始长度为 <code>m + n</code>，其中前 <code>m</code> 个元素表示应合并的元素，后 <code>n</code> 个元素为 <code>0</code> ，应忽略。<code>nums2</code> 的长度为 <code>n</code> 。</p>
</div>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意:</p>
<p>因为 <code>m = 0</code> ，所以 <code>nums1</code> 中没有元素。<code>nums1</code> 中仅存的 <code>0</code> 仅仅是为了确保合并结果可以顺利存放到 <code>nums1</code> 中。</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li>nums1.length == m + n</li>
<li>nums2.length == n</li>
<li>0 &lt;= m, n &lt;= 200</li>
<li>1 &lt;= m + n &lt;= 200</li>
<li>-10 ^ 9 &lt;= nums1[i], nums2[j] &lt;= 10 ^ 9</li>
</ul>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>先将两个数组需要取出的数字合并到 <code>nums1</code> 中，然后对 <code>nums1</code> 排序即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums1
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> m
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums2
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span>nums1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> nums2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// 删除后面的元素</span>
  nums1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
  <span class="token comment">// 将nums2的元素添加进来</span>
  nums1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>nums2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 开始排序</span>
  <span class="token comment">// nums1.sort((x, y) => x-y)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> r <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> r <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> nums1<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums1<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums1<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
