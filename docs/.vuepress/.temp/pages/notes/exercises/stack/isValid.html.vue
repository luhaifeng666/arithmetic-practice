<template><h1 id="有效的括号" tabindex="-1"><a class="header-anchor" href="#有效的括号" aria-hidden="true">#</a> 有效的括号</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code> 的字符串 s ，判断字符串是否有效。<br>
有效字符串需满足：</p>
<ol>
<li>左括号必须用相同类型的右括号闭合。</li>
<li>左括号必须以正确的顺序闭合。</li>
<li>空字符串也是有效字符串</li>
</ol>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "()"
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "()[]{}"
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "(]"
输出：false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "([)]"
输出：false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例 5：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "{[]}"
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>主要利用 <code>栈</code> <code>先进后出</code>的特性。</p>
<ol>
<li>判断如果是空串，返回 <code>true</code></li>
<li>判断如果字符串的长度是奇数的话，则必然不可能成对匹配，返回 <code>false</code></li>
<li>遍历字符串，如果符号是左半边的符号，则存入栈内，否则从栈内取出，同时判断当前的符号与取出的符号是否匹配，不匹配的话则返回 <code>false</code></li>
<li>最后判断栈内是否还有没有匹配过的符号，如果有，返回 <code>false</code>，否则返回 <code>true</code></li>
</ol>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> s
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义符号的Map</span>
  <span class="token keyword">const</span> <span class="token constant">SYMBOL_MAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'{'</span><span class="token operator">:</span> <span class="token string">'}'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'['</span><span class="token operator">:</span> <span class="token string">']'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'('</span><span class="token operator">:</span> <span class="token string">')'</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 空串也是有效字符串</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token comment">// 如果字符串长度是基数，返回false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 定义堆栈列表</span>
  <span class="token keyword">let</span> stack<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 遍历字符串</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'{'</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'('</span> <span class="token operator">||</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'['</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token constant">SYMBOL_MAP</span><span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 有没有匹配完的，返回false, 否则返回true</span>
  <span class="token keyword">return</span> <span class="token operator">!</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
