import{e as n}from"./app.acf6931e.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6700\u957F\u7279\u6B8A\u5E8F\u5217-i" tabindex="-1"><a class="header-anchor" href="#\u6700\u957F\u7279\u6B8A\u5E8F\u5217-i" aria-hidden="true">#</a> \u6700\u957F\u7279\u6B8A\u5E8F\u5217 \u2160</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u65E0\u975E\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ul><li>a \u4E0E b \u957F\u5EA6\u4E0D\u76F8\u7B49\u65F6\uFF0C\u8FD4\u56DE\u957F\u5EA6\u8F83\u957F\u7684\u503C</li><li>a \u4E0E b \u957F\u5EA6\u76F8\u7B49\u65F6 <ul><li>a === b\uFF0C\u5219\u8FD4\u56DE -1</li><li>a !== b\uFF0C\u5219\u8FD4\u56DEa \u6216 b \u7684\u957F\u5EA6\u5373\u53EF</li></ul></li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u6700\u957F\u7279\u6B8A\u5E8F\u5217 \u2160
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> a
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> b
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lengthA <span class="token operator">=</span> a<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> lengthB <span class="token operator">=</span> b<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lengthA <span class="token operator">!==</span> lengthB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>lengthA<span class="token punctuation">,</span> lengthB<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">===</span> b <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> a<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
