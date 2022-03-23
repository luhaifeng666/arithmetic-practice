import{e as n}from"./app.39b8df24.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u6700\u957F\u516C\u5171\u524D\u7F00" tabindex="-1"><a class="header-anchor" href="#\u6700\u957F\u516C\u5171\u524D\u7F00" aria-hidden="true">#</a> \u6700\u957F\u516C\u5171\u524D\u7F00</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u67E5\u627E\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u7684\u6700\u957F\u516C\u5171\u524D\u7F00\u3002<br> \u5982\u679C\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32 <code>&quot;&quot;</code> \u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Astrs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
\u8F93\u51FA\uFF1A&quot;fl&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Astrs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
\u8F93\u51FA\uFF1A&quot;&quot;
\u89E3\u91CA\uFF1A\u8F93\u5165\u4E0D\u5B58\u5728\u516C\u5171\u524D\u7F00\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= strs.length &lt;= 200 0 &lt;= strs[i].length &lt;= 200 strs[i] \u4EC5\u7531\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5224\u65AD\u6570\u7EC4\u957F\u5EA6\uFF0C\u5982\u679C\u957F\u5EA6\u5C0F\u4E8E2\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5143\u7D20\u6216\u8005\u7A7A\u5143\u7D20</li><li>\u5426\u5219\u53D6\u51FA\u7B2C\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u53C2\u7167\u9879\uFF0C\u4F9D\u6B21\u53D6\u51FA\u5B83\u7684\u5B57\u7B26\u4E0E\u6570\u7EC4\u4E2D\u5269\u4E0B\u7684\u5143\u7D20\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u5982\u679C\u4E00\u81F4\uFF0C\u5219\u6DFB\u52A0\u5230\u7ED3\u679C\u5B57\u7B26\u4E32\u4E2D\uFF0C\u5426\u5219\u76F4\u63A5\u8DF3\u51FA\u5FAA\u73AF</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> strs
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>strs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> firstItem <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> firstItem<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>str <span class="token operator">=&gt;</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> firstItem<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">+=</span> firstItem<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,11);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};