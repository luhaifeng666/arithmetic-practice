<template><h1 id="_3的幂" tabindex="-1"><a class="header-anchor" href="#_3的幂" aria-hidden="true">#</a> 3的幂</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个整数，写一个函数来判断它是否是 <code>3</code> 的幂次方。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。<br>
整数 <code>n</code> 是 <code>3</code> 的幂次方需满足：存在整数 <code>x</code> 使得 <code>n == 3x</code></p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 27
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 0
输出：false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 9
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 45
输出：false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>-2^31 &lt;= n &lt;= 2^31 - 1</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">进阶：</p>
<p>你能不使用循环或者递归来完成本题吗？</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路：</p>
<p>通过 <code>递归</code> 的方式。</p>
<ul>
<li>如果输入的目标值是0，直接返回 <code>false</code></li>
<li>否则将目标值每次与3求余。</li>
<li>如果余数是0， 则将目标值除以三，继续调用方法</li>
<li>如果余数是1，返回 <code>true</code></li>
<li>其他情况返回 <code>false</code></li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 递归的方式
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isPowerOfThree</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token comment">// 递归</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> n <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">3</span>
    <span class="token keyword">return</span> <span class="token function">isPowerOfThree</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路：</p>
<p>通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/log#%E4%BE%8B%E5%AD%902_%E4%BD%BF%E7%94%A8math.log%E6%97%B6%E5%9F%BA%E4%BA%8E%E4%B8%8D%E5%90%8C%E7%9A%84%E5%BA%95%E6%95%B0" target="_blank" rel="noopener noreferrer">Math.log<ExternalLinkIcon/></a> 方法，求得底数，并使用正则表达式 <code>/^[0-9]\d*$/g</code> 判断结果是否为整数。如果是整数，则返回 <code>true</code>，否则返回 <code>false</code>。</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">注意：</p>
<p>js存在浮点溢出的问题，所以需要通过 <code>parseFloat((Math.log(n) / Math.log(3)).toFixed(10))</code> 的方式转换整数。<br>
其他转换方式可以<a href="https://zhuanlan.zhihu.com/p/191395766" target="_blank" rel="noopener noreferrer">戳<ExternalLinkIcon/></a></p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Math.log + 正则的方式
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isPowerOfThreeByRegular</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]\d*$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
