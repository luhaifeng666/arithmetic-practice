import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u6C49\u660E\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u6C49\u660E\u8DDD\u79BB" aria-hidden="true">#</a> \u6C49\u660E\u8DDD\u79BB</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u4E24\u4E2A\u6574\u6570\u4E4B\u95F4\u7684 \u6C49\u660E\u8DDD\u79BB \u6307\u7684\u662F\u8FD9\u4E24\u4E2A\u6570\u5B57\u5BF9\u5E94\u4E8C\u8FDB\u5236\u4F4D\u4E0D\u540C\u7684\u4F4D\u7F6E\u7684\u6570\u76EE\u3002<br> \u7ED9\u4F60\u4E24\u4E2A\u6574\u6570 <code>x</code> \u548C <code>y</code>\uFF0C\u8BA1\u7B97\u5E76\u8FD4\u56DE\u5B83\u4EEC\u4E4B\u95F4\u7684\u6C49\u660E\u8DDD\u79BB\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = 1, y = 4
\u8F93\u51FA\uFF1A2
\u89E3\u91CA\uFF1A
1   (0 0 0 1)
4   (0 1 0 0)
       \u2191   \u2191
\u4E0A\u9762\u7684\u7BAD\u5934\u6307\u51FA\u4E86\u5BF9\u5E94\u4E8C\u8FDB\u5236\u4F4D\u4E0D\u540C\u7684\u4F4D\u7F6E\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ax = 3, y = 1
\u8F93\u51FA\uFF1A1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>0 &lt;= x, y &lt;= 2 ^ 31 - 1</p></div><h2 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u901A\u8FC7 <code>\u4F4D\u8FD0\u7B97</code> \u7684\u65B9\u5F0F\u89E3\u9898\u3002</p><ul><li>\u5148\u5C06\u4E24\u6570\u901A\u8FC7 <code>\u5F02\u6216</code> \u53D6\u5F97\u7ED3\u679C <code>res</code>\uFF0C<code>res</code> \u7684\u4E8C\u8FDB\u5236\u6570\u4E2D <code>1</code> \u7684\u4E2A\u6570\u5373\u4E3A\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C</li><li>\u6211\u4EEC\u5C06 <code>res</code> \u4E0E <code>1</code> \u8FDB\u884C <code>\u4E0E</code> \u8FD0\u7B97\uFF0C\u5982\u679C\u7ED3\u679C\u662F <code>1</code>\uFF0C\u5219\u8BF4\u660E\u6700\u540E\u4E00\u4F4D\u662F1</li><li>\u5C06 <code>res</code> \u53F3\u79FB\uFF0C\u5E76\u91CD\u590D\u4E0E <code>1</code> \u8FDB\u884C <code>\u4E0E</code> \u8FD0\u7B97\u7684\u64CD\u4F5C\uFF0C\u76F4\u5230 <code>res === 0</code> \u4E3A\u6B62</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> y
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">hammingDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> x <span class="token operator">^</span> y
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>res <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count <span class="token operator">+=</span> res <span class="token operator">&amp;</span> <span class="token number">1</span>
      res <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u901A\u8FC7js\u4E2D\u7684 <code>toString</code> \u65B9\u6CD5\uFF0C\u5C06\u4E24\u6570 <code>\u5F02\u6216</code> \u7684\u7ED3\u679C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u7EDF\u8BA1\u51FA\u91CC\u9762 <code>1</code> \u7684\u4E2A\u6570\u5373\u53EF\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> x
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> y
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">hammingDistanceByString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">^</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,14);function p(t,c){return e}var l=s(a,[["render",p]]);export{l as default};
