<template><h1 id="有效的字母异位词" tabindex="-1"><a class="header-anchor" href="#有效的字母异位词" aria-hidden="true">#</a> 有效的字母异位词</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。<br></p>
<div class="custom-container warning"><p class="custom-container-title">注意：</p>
<p>若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。</p>
</div>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "anagram", t = "nagaram"
输出: true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2:</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: s = "rat", t = "car"
输出: false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示:</p>
<p>1 &lt;= s.length, t.length &lt;= 5 * 10 ^ 4
s 和 t 仅包含小写字母</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>先将两个字符串进行排序</li>
<li>然后比对每一位上的字符是否相等，如果其中一位不相等，则是 <code>false</code>, 否则为 <code>true</code></li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> strSort <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> isAnagram <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果长度不一样，则必然返回false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> t<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 排序之后，比较每个位置上的字符是否相同，是则是true，否则返回false</span>
  <span class="token keyword">const</span> sStrs <span class="token operator">=</span> <span class="token function">strSort</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
  <span class="token keyword">const</span> tStrs <span class="token operator">=</span> <span class="token function">strSort</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
  <span class="token keyword">return</span> sStrs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> str <span class="token operator">===</span> tStrs<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>将字符串出现的字符及对应出现的次数存成对象</li>
<li>之后用另一个字符串遍历与之比对，如果出现的次数一致，则为 <code>true</code>, 否则为 <code>false</code></li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> isAnagramByMap <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果长度不一样，则必然返回false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">!==</span> t<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 存出现次数的映射关系</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> map<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> t<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> map<span class="token punctuation">[</span>t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>num <span class="token operator">=></span> <span class="token operator">!</span>num<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
