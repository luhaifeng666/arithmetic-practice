<template><h1 id="罗马数字转整数" tabindex="-1"><a class="header-anchor" href="#罗马数字转整数" aria-hidden="true">#</a> 罗马数字转整数</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>罗马数字包含以下七种字符: <code>I，V，X，L，C，D和M</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>例如， 罗马数字 <code>2</code> 写做 <code>II</code> ，即为两个并列的 <code>1</code> 。<code>12</code> 写做 <code>XII</code> ，即为<code>X + II</code> 。 <code>27</code> 写做 <code>XXVII</code> , 即为 <code>XX + V + II</code>。<br></p>
<p>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>给定一个罗马数字，将其转换成整数。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "III"
输出: 3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "IV"
输出: 4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "IX"
输出: 9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例 5:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li>1 &lt;= s.length &lt;= 15</li>
<li><code>s</code> 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')</li>
<li>题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内</li>
<li>题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。</li>
<li><code>IL</code> 和 <code>IM</code> 这样的例子并不符合题目要求，<code>49</code> 应该写作 <code>XLIX</code>，<code>999</code> 应该写作 <code>CMXCIX</code> 。</li>
<li>关于罗马数字的详尽书写规则，可以参考 <a href="https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article" target="_blank" rel="noopener noreferrer">罗马数字 - Mathematics<ExternalLinkIcon/></a> 。</li>
</ul>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>如果给定字符串为空串，直接返回0</li>
<li>将每个字母代表的数字保存成字典</li>
<li>遍历字符串，拿当前项与后一项对比，如果后一项大于前一项，说明是组合项，用 <code>count</code> 加上两者的差</li>
<li>否则直接用 <code>count</code> 加上当前项</li>
<li>返回 <code>count</code> 即可</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> s
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chartMap <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token constant">I</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token constant">V</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token constant">X</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token constant">L</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token constant">C</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token constant">D</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
      <span class="token constant">M</span><span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> chartMap<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> chartMap<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token punctuation">(</span>chartMap<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> chartMap<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> chartMap<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
