<template><h1 id="只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#只出现一次的数字" aria-hidden="true">#</a> 只出现一次的数字</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个<strong>非空</strong>整数数组，除了某个元素只出现一次以外，其余每个元素均出现<strong>两次</strong>。找出那个只出现了一次的元素。</p>
<h4 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明：</h4>
<p>你的算法应该具有线性时间复杂度。 你可以<strong>不使用额外空间</strong>来实现吗？</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: [2,2,1]
输出: 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: [4,1,2,1,2]
输出: 4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>位运算</code> 中的 <code>异或</code> 求解。<br>
<code>异或</code> 的方式是将目标数转为 <code>二进制</code> 数，逐位比较，不足的位数前面补0。具体的规则如下：</p>
<ul>
<li>1 ^ 0 = 1</li>
<li>1 ^ 1 = 0</li>
<li>0 ^ 1 = 1</li>
<li>0 ^ 0 = 0
<br>
即：相同结果为0，不同结果为1。且 <code>异或</code> 有交换的规律： <br></li>
<li>a ^ b ^ c = a ^ c ^ b <br>
所以这道题我们可以利用 <code>异或</code> 的特性，因为重复元素只会出现两次，所以数组中所有元素的异或结果，即为我们想要的答案。<br>
由于题目要求不可以使用额外的空间，我们可以将两个值的比对结果赋值给后面的一个值，直到遍历结束，取数组最后一个值即可。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 利用位运算
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">singleNumber</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
