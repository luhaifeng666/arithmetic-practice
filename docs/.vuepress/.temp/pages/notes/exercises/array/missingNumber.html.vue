<template><h1 id="缺失数字" tabindex="-1"><a class="header-anchor" href="#缺失数字" aria-hidden="true">#</a> 缺失数字</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个包含 <code>[0, n]</code> 中 <code>n</code> 个数的数组 <code>nums</code> ，找出 <code>[0, n]</code> 这个范围内没有出现在数组中的那个数。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li>n == nums.length</li>
<li>1 &lt;= n &lt;= 10 ^ 4</li>
<li>0 &lt;= nums[i] &lt;= n</li>
<li><code>nums</code> 中的所有数字都 独一无二</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">进阶：</p>
<p>你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>通过 <code>排序</code> 的方式。</p>
<ul>
<li>先将数组排序</li>
<li>遍历数组，用下标与对应的数字进行比对
<ul>
<li>如果相同，则跳过；</li>
<li>如果不同，根据下标判断返回的值，下标是0，则直接返回，否则返回 <code>当前值 - 1</code>；</li>
<li>若遍历结束，则直接返回数组长度</li>
</ul>
</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 排序
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">missingNumberBySort</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> sortNum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">-</span> y<span class="token punctuation">)</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> sortNum<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">!==</span> index<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>通过 <code>位运算</code> 的方式。<br>
<code>异或</code> 的方式是将目标数转为 <code>二进制</code> 数，逐位比较，不足的位数前面补0。具体的规则如下：</p>
<ul>
<li>1 ^ 0 = 1</li>
<li>1 ^ 1 = 0</li>
<li>0 ^ 1 = 1</li>
<li>0 ^ 0 = 0
<br>
即：相同结果为0，不同结果为1。且 <code>异或</code> 有交换的规律： <br></li>
<li>a ^ b ^ c = a ^ c ^ b <br>
所以这道题可以通过异或的方式去重，最后与数组长度进行比较，如果都是重复的值，则返回数组长度，否则返回对应的值。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 位运算
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">missingNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">^=</span> i <span class="token operator">^</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res <span class="token operator">^</span> nums<span class="token punctuation">.</span>length
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="解法三" tabindex="-1"><a class="header-anchor" href="#解法三" aria-hidden="true">#</a> 解法三</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>通过 <code>求和</code> 的方式。</p>
<ul>
<li>求得所有数的和。由于数据是等差数列，且从0开始，所以算上缺失数字的和为 <code>((0 + nums.length) * (nums.length + 1)) / 2</code></li>
<li>遍历求差，差为结果</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 求和
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">missingNumberBySum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// 求和</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>length <span class="token operator">*</span> <span class="token punctuation">(</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token operator">=></span> res <span class="token operator">-</span> num<span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
