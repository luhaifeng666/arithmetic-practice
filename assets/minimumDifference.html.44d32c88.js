import{e as n}from"./app.6b09dc19.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5B66\u751F\u5206\u6570\u7684\u6700\u5C0F\u5DEE\u503C" tabindex="-1"><a class="header-anchor" href="#\u5B66\u751F\u5206\u6570\u7684\u6700\u5C0F\u5DEE\u503C" aria-hidden="true">#</a> \u5B66\u751F\u5206\u6570\u7684\u6700\u5C0F\u5DEE\u503C</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A \u4E0B\u6807\u4ECE 0 \u5F00\u59CB \u7684\u6574\u6570\u6570\u7EC4 nums \uFF0C\u5176\u4E2D nums[i] \u8868\u793A\u7B2C i \u540D\u5B66\u751F\u7684\u5206\u6570\u3002\u53E6\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570 k \u3002<br> \u4ECE\u6570\u7EC4\u4E2D\u9009\u51FA\u4EFB\u610F k \u540D\u5B66\u751F\u7684\u5206\u6570\uFF0C\u4F7F\u8FD9 k \u4E2A\u5206\u6570\u95F4 \u6700\u9AD8\u5206 \u548C \u6700\u4F4E\u5206 \u7684 \u5DEE\u503C \u8FBE\u5230 \u6700\u5C0F\u5316 \u3002<br> \u8FD4\u56DE\u53EF\u80FD\u7684 \u6700\u5C0F\u5DEE\u503C \u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [90], k = 1
\u8F93\u51FA\uFF1A0
\u89E3\u91CA\uFF1A\u9009\u51FA 1 \u540D\u5B66\u751F\u7684\u5206\u6570\uFF0C\u4EC5\u6709 1 \u79CD\u65B9\u6CD5\uFF1A
- [90] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 90 - 90 = 0
  \u53EF\u80FD\u7684\u6700\u5C0F\u5DEE\u503C\u662F 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [9,4,1,7], k = 2
\u8F93\u51FA\uFF1A2
\u89E3\u91CA\uFF1A\u9009\u51FA 2 \u540D\u5B66\u751F\u7684\u5206\u6570\uFF0C\u6709 6 \u79CD\u65B9\u6CD5\uFF1A
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 9 - 4 = 5
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 9 - 1 = 8
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 9 - 7 = 2
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 4 - 1 = 3
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 7 - 4 = 3
- [9,4,1,7] \u6700\u9AD8\u5206\u548C\u6700\u4F4E\u5206\u4E4B\u95F4\u7684\u5DEE\u503C\u662F 7 - 1 = 6
  \u53EF\u80FD\u7684\u6700\u5C0F\u5DEE\u503C\u662F 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= k &lt;= nums.length &lt;= 1000 0 &lt;= nums[i] &lt;= 105</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5148\u5C06\u6570\u7EC4\u6392\u5E8F</li><li>\u904D\u5386\u6570\u7EC4\uFF0C\u627E\u51FA\u6240\u6709\u53EF\u80FD\u6027\uFF0C\u5E76\u5C06\u6700\u5927\u503C\u4E0E\u6700\u5C0F\u503C\u7684\u5DEE\u5B58\u4E0B\u6765</li><li>\u8FD4\u56DE\u5DEE\u503C\u4E2D\u7684\u6700\u5C0F\u503C</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5B66\u751F\u5206\u6570\u7684\u6700\u5C0F\u5DEE\u503C
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> k
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EA\u6311\u4E00\u4E2A\u6210\u7EE9\u7684\u65F6\u5019\uFF0C\u6700\u5C0F\u503C\u4E3A0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">||</span> k <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// \u6392\u5E8F</span>
  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">-</span> next<span class="token punctuation">)</span>
  <span class="token comment">// \u904D\u5386</span>
  <span class="token keyword">const</span> diffs<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resets<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> resets<span class="token punctuation">.</span>length <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> resets<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> n <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
      diffs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>resets<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>diffs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,11);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};