<template><h1 id="加一" tabindex="-1"><a class="header-anchor" href="#加一" aria-hidden="true">#</a> 加一</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个由 <code>整数</code> 组成的 <code>非空</code> 数组所表示的非负整数，在该数的基础上加一。<br>
最高位数字存放在数组的首位， 数组中每个元素只存储<strong>单个</strong>数字。<br>
你可以假设除了整数 <code>0</code> 之外，这个整数不会以零开头。</p>
<h4 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2" aria-hidden="true">#</a> 示例2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例3" tabindex="-1"><a class="header-anchor" href="#示例3" aria-hidden="true">#</a> 示例3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：digits = [0]
输出：[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示：</h4>
<ul>
<li>1 &lt;= digits.length &lt;= 100</li>
<li>0 &lt;= digits[i] &lt;= 9</li>
</ul>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>将数组从后往前遍历。<br>
如果最后一位不是9的话，直接将最后一位加一，并返回数组；<br>
如果最后一位是9，则先将最后一位变成0，然后继续执行循环;<br>
若能执行到循环结束，则说明每一位都是9，那么只需要在遍历过后的数字开头插入1即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> digits
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">plusOne</span> <span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// 空数组直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>digits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 从后往前遍历</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> digits<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果最后一位是9，则将它变成0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 否则直接+1返回</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
      <span class="token keyword">return</span> digits
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果数组中都是9，则会走到这一步</span>
  <span class="token comment">// 将所有数变成0之后，数组头部插入1即可</span>
  digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> digits
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
