<template><h1 id="颠倒二进制位" tabindex="-1"><a class="header-anchor" href="#颠倒二进制位" aria-hidden="true">#</a> 颠倒二进制位</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>颠倒给定的 32 位无符号整数的二进制位。</p>
<div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 <code>示例 2</code> 中，输入表示有符号整数 <code>-3</code>，输出表示有符号整数 <code>-1073741825</code>。</p>
</div>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：`n = 00000010100101000001111010011100` &lt;br>
输出：`964176192` (00111001011110000010100101000000) &lt;br>
解释：输入的二进制串 `00000010100101000001111010011100` 表示无符号整数 `43261596`，&lt;br>
因此返回 `964176192`，其二进制表示形式为 `00111001011110000010100101000000`。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：`n = 11111111111111111111111111111101`
输出：`3221225471` (10111111111111111111111111111111)
解释：输入的二进制串 `11111111111111111111111111111101` 表示无符号整数 `4294967293`，
因此返回 `3221225471` 其二进制表示形式为 `10111111111111111111111111111111` 。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>输入是一个长度为 <code>32</code> 的二进制字符串</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>将传入的数字转换为二进制格式，如果不足32位，则前面空余的位置用0补齐。<br>
之后将二进制转换为字符串格式，并通过翻转字符串的方式，将最终结果重新转换为数字即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n - a positive integer
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> - a positive integer
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reverseBitsByString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token comment">// 补0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> str <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> str
  <span class="token keyword">const</span> strList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token comment">// 翻转字符串</span>
  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>strList<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>双指针</code> 的方式。<br>
将传入的数字转换为二进制格式，如果不足32位，则前面空余的位置用0补齐。<br>
将二进制字符串转换为数组，在头尾各放置一个指针，遍历数组，交换头尾指针的值。<br>
将转换完成的数组变成字符串，并重新转换为数字即可。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n - a positive integer
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> - a positive integer
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reverseBits</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token comment">// 补0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">)</span> str <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">+</span> str
  <span class="token keyword">const</span> strList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token comment">// 双指针</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> strList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token punctuation">[</span>strList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> strList<span class="token punctuation">[</span>strList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>strList<span class="token punctuation">[</span>strList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">,</span> strList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>strList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
