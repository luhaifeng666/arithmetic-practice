import{e as n}from"./app.41fee2a5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6" aria-hidden="true">#</a> \u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u7531\u82E5\u5E72\u5355\u8BCD\u7EC4\u6210\uFF0C\u5355\u8BCD\u524D\u540E\u7528\u4E00\u4E9B\u7A7A\u683C\u5B57\u7B26\u9694\u5F00\u3002\u8FD4\u56DE\u5B57\u7B26\u4E32\u4E2D\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6\u3002<br> \u5355\u8BCD \u662F\u6307\u4EC5\u7531\u5B57\u6BCD\u7EC4\u6210\u3001\u4E0D\u5305\u542B\u4EFB\u4F55\u7A7A\u683C\u5B57\u7B26\u7684\u6700\u5927\u5B50\u5B57\u7B26\u4E32\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;Hello World&quot;
\u8F93\u51FA\uFF1A5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;   fly me   to   the moon  &quot;
\u8F93\u51FA\uFF1A4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B 3\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;luffy is still joyboy&quot;
\u8F93\u51FA\uFF1A6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= s.length &lt;= 10 ^ 4 s \u4EC5\u6709\u82F1\u6587\u5B57\u6BCD\u548C\u7A7A\u683C &#39; &#39; \u7EC4\u6210 s \u4E2D\u81F3\u5C11\u5B58\u5728\u4E00\u4E2A\u5355\u8BCD</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u79FB\u9664\u524D\u540E\u7A7A\u683C</li><li>\u6309\u7A7A\u683C\u62C6\u5206</li><li>\u53D6\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5176\u957F\u5EA6\u5373\u53EF</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> s
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13);function t(p,c){return e}var o=s(a,[["render",t]]);export{o as default};