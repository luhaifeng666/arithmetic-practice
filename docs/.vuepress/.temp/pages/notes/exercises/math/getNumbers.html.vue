<template><h1 id="复数乘法" tabindex="-1"><a class="header-anchor" href="#复数乘法" aria-hidden="true">#</a> 复数乘法</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>复数 可以用字符串表示，遵循 <code>&quot;实部+虚部i&quot;</code> 的形式，并满足下述条件：</p>
<ul>
<li>实部 是一个整数，取值范围是 [-100, 100]</li>
<li>虚部 也是一个整数，取值范围是 [-100, 100]</li>
<li>i ^ 2 == -1
给你两个字符串表示的复数 <code>num1</code> 和 <code>num2</code> ，请你遵循复数表示形式，返回表示它们乘积的字符串。</li>
</ul>
<p></p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：num1 = "1+1i", num2 = "1+1i"
输出："0+2i"
解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：num1 = "1+-1i", num2 = "1+-1i"
输出："0+-2i"
解释：(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>num1 和 num2 都是有效的复数表示。</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>先将给定的字符串进行拆分，得到实数与虚数</li>
<li>分别定义最后表达式的实部 <code>real</code> 与虚部 <code>virtual</code></li>
<li>利用双重循环，各项依次相乘
<ul>
<li>如果都是实数，则与 <code>real</code> 求和并保存</li>
<li>如果都是虚数，则先将表达式中的数字相乘，再乘以 -1，最终与 <code>real</code> 求和并保存</li>
<li>如果一实一虚，则将数字的乘积与 <code>virtual</code> 求和并保存</li>
</ul>
</li>
<li>最终返回 <code>real + virtual + i</code> 的形式即可</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 复数乘法
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> num1
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> num2
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getNumbers</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'+'</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums1 <span class="token operator">=</span> <span class="token function">getNumbers</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span>
  <span class="token keyword">const</span> nums2 <span class="token operator">=</span> <span class="token function">getNumbers</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>
  <span class="token keyword">let</span> real <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> virtual <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> isNumber1 <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> isNumber2 <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token comment">// 都是数字</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isNumber1 <span class="token operator">&amp;&amp;</span> isNumber2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        real <span class="token operator">+=</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 其中一个是虚数</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>isNumber1 <span class="token operator">&amp;&amp;</span> isNumber2<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>isNumber1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isNumber2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        virtual <span class="token operator">+=</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 都是虚数</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isNumber1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isNumber2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        real <span class="token operator">+=</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>real<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>virtual<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">i</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></template>
