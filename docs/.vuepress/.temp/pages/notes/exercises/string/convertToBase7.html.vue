<template><h1 id="七进制数" tabindex="-1"><a class="header-anchor" href="#七进制数" aria-hidden="true">#</a> 七进制数</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。</p>
<p></p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: num = 100
输出: "202"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: num = -7
输出: "-10"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>-10 ^ 7 &lt;= num &lt;= 10 ^ 7</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>考虑到负数的情况，先将数字转换为正数，之后每次对 7 求余，并将数字压栈。最后将栈内的数字组合成字符串，并根据传入数字是否 &gt;= 0判断是否要给结果加上负号。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 七进制数
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> num
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> _num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> num <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> num <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>_num <span class="token operator">>=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nums<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>_num <span class="token operator">%</span> <span class="token number">7</span><span class="token punctuation">)</span>
    _num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>_num <span class="token operator">/</span> <span class="token number">7</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  nums<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>_num<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> <span class="token string">'-'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nums<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
