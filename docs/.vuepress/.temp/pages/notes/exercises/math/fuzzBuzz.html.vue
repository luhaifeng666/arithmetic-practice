<template><h1 id="fizz-buzz" tabindex="-1"><a class="header-anchor" href="#fizz-buzz" aria-hidden="true">#</a> Fizz Buzz</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个整数 n ，找出从 1 到 n 各个整数的 <code>Fizz Buzz</code> 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：</p>
<ul>
<li>answer[i] == &quot;FizzBuzz&quot; 如果 i 同时是 3 和 5 的倍数。</li>
<li>answer[i] == &quot;Fizz&quot; 如果 i 是 3 的倍数。</li>
<li>answer[i] == &quot;Buzz&quot; 如果 i 是 5 的倍数。</li>
<li>answer[i] == i 如果上述条件全不满足。</li>
</ul>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 3
输出：["1","2","Fizz"]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= n &lt;= 104</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isFizz <span class="token operator">=</span> <span class="token operator">!</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> isBuzz <span class="token operator">=</span> <span class="token operator">!</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isFizz <span class="token operator">&amp;&amp;</span> isBuzz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'FizzBuzz'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isFizz <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isBuzz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'Fizz'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isBuzz <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isFizz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'Buzz'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> results
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></template>
