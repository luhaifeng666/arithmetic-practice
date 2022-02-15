<template><h1 id="旋转数组" tabindex="-1"><a class="header-anchor" href="#旋转数组" aria-hidden="true">#</a> 旋转数组</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个数组，将数组中的元素向右轮转 <code>k</code> 个位置，其中 <code>k</code> 是非负数。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li><code>1 &lt;= nums.length &lt;= 105</code></li>
<li><code>-231 &lt;= nums[i] &lt;= 231 - 1</code></li>
<li><code>0 &lt;= k &lt;= 105</code></li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">进阶：</p>
<ul>
<li>尽可能想出更多的解决方案，至少有 <code>三种</code> 不同的方法可以解决这个问题。</li>
<li>你可以使用空间复杂度为 <code>O(1)</code> 的 原地 算法解决这个问题吗？</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意：</p>
<p>解这道题时，需要注意传入的 <code>k</code> 值，这个值是可能 <code>&gt;=</code> 数组的长度的。需要先做 <code>取余</code> 操作</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<p>取出需要翻转的数字，插入数组头部。</p>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>将需要旋转的元素从数组中取出来，再插入到数组头部。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> k
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">function</span> <span class="token function">rotate</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// 空数组，或者nums.length可以被k整除，则返回原数组</span>
  <span class="token keyword">const</span> times <span class="token operator">=</span> k <span class="token operator">%</span> nums<span class="token punctuation">.</span>length
  <span class="token comment">// 将需要旋转的数字整体取出，插入到数组开头</span>
  nums<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> times<span class="token punctuation">,</span> times<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<p>通过整体翻转再局部翻转的方式旋转</p>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>先整体翻转，再翻转需要旋转的数字以及不需要旋转的数字。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> k
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">function</span> <span class="token function">rotateByReverse</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> times <span class="token operator">=</span> k <span class="token operator">%</span> nums<span class="token punctuation">.</span>length
  <span class="token comment">// 通过翻转数组的方式，先整体翻转，再翻转需要旋转的数字以及不需要旋转的数字</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> times<span class="token punctuation">)</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> times<span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> end<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> end <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>end <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i <span class="token operator">+</span> start<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>end <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i <span class="token operator">+</span> start<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="解法三" tabindex="-1"><a class="header-anchor" href="#解法三" aria-hidden="true">#</a> 解法三</h2>
<p>通过临时数组存储的方式旋转。</p>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>先将传入的数组缓存起来，然后再依次将值替换到原数组对应的位置。<br>
<strong>这里需要注意的是需要使用 <code>拷贝</code> 的方式保存，不然会改变原数组，影响结果。</strong></p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> k
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">function</span> <span class="token function">rotateByTemp</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> times <span class="token operator">=</span> k <span class="token operator">%</span> nums<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> tempNums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nums<span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> times<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tempNums<span class="token punctuation">[</span>tempNums<span class="token punctuation">.</span>length <span class="token operator">-</span> times <span class="token operator">+</span> i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> times<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>i <span class="token operator">+</span> times<span class="token punctuation">]</span> <span class="token operator">=</span> tempNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
