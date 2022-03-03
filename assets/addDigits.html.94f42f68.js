import{e as n}from"./app.d010109b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5404\u4F4D\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5404\u4F4D\u76F8\u52A0" aria-hidden="true">#</a> \u5404\u4F4D\u76F8\u52A0</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u975E\u8D1F\u6574\u6570 num\uFF0C\u53CD\u590D\u5C06\u5404\u4E2A\u4F4D\u4E0A\u7684\u6570\u5B57\u76F8\u52A0\uFF0C\u76F4\u5230\u7ED3\u679C\u4E3A\u4E00\u4F4D\u6570\u3002\u8FD4\u56DE\u8FD9\u4E2A\u7ED3\u679C\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: num = 38
\u8F93\u51FA: 2
\u89E3\u91CA: \u5404\u4F4D\u76F8\u52A0\u7684\u8FC7\u7A0B\u4E3A\uFF1A
38 --&gt; 3 + 8 --&gt; 11
11 --&gt; 1 + 1 --&gt; 2
\u7531\u4E8E 2 \u662F\u4E00\u4F4D\u6570\uFF0C\u6240\u4EE5\u8FD4\u56DE 2\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: num = 0
\u8F93\u51FA: 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>0 &lt;= num &lt;= 2 ^ 31\xA0- 1</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u9012\u5F52</code> \u7684\u601D\u60F3\uFF0C\u5C06\u6570\u5B57\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u6BCF\u4F4D\u76F8\u52A0\uFF0C\u5224\u65AD\u662F\u5426\u5C0F\u4E8E10\uFF0C\u5982\u679C\u5C0F\u4E8E10\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5426\u5219\u7EE7\u7EED\u6267\u884C\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5404\u4F4D\u76F8\u52A0
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> num
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addDigits</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">return</span> num
  <span class="token keyword">return</span> <span class="token function">addDigits</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> num<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,11);function t(p,c){return e}var i=s(a,[["render",t]]);export{i as default};
