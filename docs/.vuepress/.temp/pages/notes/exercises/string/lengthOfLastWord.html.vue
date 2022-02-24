<template><h1 id="最后一个单词的长度" tabindex="-1"><a class="header-anchor" href="#最后一个单词的长度" aria-hidden="true">#</a> 最后一个单词的长度</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。<br>
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "Hello World"
输出：5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "   fly me   to   the moon  "
输出：4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：s = "luffy is still joyboy"
输出：6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= s.length &lt;= 10 ^ 4
s 仅有英文字母和空格 ' ' 组成
s 中至少存在一个单词</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>移除前后空格</li>
<li>按空格拆分</li>
<li>取最后一个字符串，返回其长度即可</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> s
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
