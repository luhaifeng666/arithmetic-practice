import{e as n}from"./app.41fee2a5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD" aria-hidden="true">#</a> \u4EC5\u4EC5\u53CD\u8F6C\u5B57\u6BCD</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u6839\u636E\u4E0B\u8FF0\u89C4\u5219\u53CD\u8F6C\u5B57\u7B26\u4E32\uFF1A</p><ul><li>\u6240\u6709\u975E\u82F1\u6587\u5B57\u6BCD\u4FDD\u7559\u5728\u539F\u6709\u4F4D\u7F6E\u3002</li><li>\u6240\u6709\u82F1\u6587\u5B57\u6BCD\uFF08\u5C0F\u5199\u6216\u5927\u5199\uFF09\u4F4D\u7F6E\u53CD\u8F6C\u3002</li><li>\u8FD4\u56DE\u53CD\u8F6C\u540E\u7684 s \u3002</li></ul><p></p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;ab-cd&quot;
\u8F93\u51FA\uFF1A&quot;dc-ba&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;a-bC-dEf-ghIj&quot;
\u8F93\u51FA\uFF1A&quot;j-Ih-gfE-dCba&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u793A\u4F8B 3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1As = &quot;Test1ng-Leet=code-Q!&quot;
\u8F93\u51FA\uFF1A&quot;Qedo1ct-eeLg=ntse-T!&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>1 &lt;= s.length &lt;= 100</li><li>s \u4EC5\u7531 ASCII \u503C\u5728\u8303\u56F4 [33, 122] \u7684\u5B57\u7B26\u7EC4\u6210</li><li>s \u4E0D\u542B &#39;&quot;&#39; \u6216 &#39;\\&#39;</li></ul></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5C06\u5B57\u6BCD\u90E8\u5206\u7FFB\u8F6C</li><li>\u8BB0\u5F55\u4E0B\u975E\u5B57\u6BCD\u7684\u7D22\u5F15</li><li>\u63D2\u5165\u7FFB\u8F6C\u540E\u7684\u5B57\u7B26\u6570\u7EC4\u5BF9\u5E94\u4F4D\u7F6E</li><li>\u8FD4\u56DEjoin\u7684\u7ED3\u679C</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> s
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0D\u5E26\u7B26\u53F7\u7684\u5B57\u7B26\u4E32\u96C6\u5408</span>
  <span class="token keyword">const</span> charList <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]|[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7B26\u53F7\u7684\u4F4D\u7F6E</span>
  <span class="token keyword">const</span> symbols <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token punctuation">{</span> char<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> char<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]|[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> char<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5BF9\u5E94\u4F4D\u7F6E\u63D2\u5165\u5B57\u7B26</span>
  symbols<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> char<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> charList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> char<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> charList<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,15);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};