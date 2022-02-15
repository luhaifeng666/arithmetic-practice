import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6253\u5BB6\u52AB\u820D" tabindex="-1"><a class="header-anchor" href="#\u6253\u5BB6\u52AB\u820D" aria-hidden="true">#</a> \u6253\u5BB6\u52AB\u820D</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5C0F\u5077\uFF0C\u8BA1\u5212\u5077\u7A83\u6CBF\u8857\u7684\u623F\u5C4B\u3002\u6BCF\u95F4\u623F\u5185\u90FD\u85CF\u6709\u4E00\u5B9A\u7684\u73B0\u91D1\uFF0C\u5F71\u54CD\u4F60\u5077\u7A83\u7684\u552F\u4E00\u5236\u7EA6\u56E0\u7D20\u5C31\u662F\u76F8\u90BB\u7684\u623F\u5C4B\u88C5\u6709\u76F8\u4E92\u8FDE\u901A\u7684\u9632\u76D7\u7CFB\u7EDF\uFF0C\u5982\u679C\u4E24\u95F4\u76F8\u90BB\u7684\u623F\u5C4B\u5728\u540C\u4E00\u665A\u4E0A\u88AB\u5C0F\u5077\u95EF\u5165\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u62A5\u8B66\u3002<br> \u7ED9\u5B9A\u4E00\u4E2A\u4EE3\u8868\u6BCF\u4E2A\u623F\u5C4B\u5B58\u653E\u91D1\u989D\u7684\u975E\u8D1F\u6574\u6570\u6570\u7EC4\uFF0C\u8BA1\u7B97\u4F60 \u4E0D\u89E6\u52A8\u8B66\u62A5\u88C5\u7F6E\u7684\u60C5\u51B5\u4E0B \uFF0C\u4E00\u591C\u4E4B\u5185\u80FD\u591F\u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A[1,2,3,1]
\u8F93\u51FA\uFF1A4
\u89E3\u91CA\uFF1A\u5077\u7A83 1 \u53F7\u623F\u5C4B (\u91D1\u989D = 1) \uFF0C\u7136\u540E\u5077\u7A83 3 \u53F7\u623F\u5C4B (\u91D1\u989D = 3)\u3002
\u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D = 1 + 3 = 4 \u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A[2,7,9,3,1]
\u8F93\u51FA\uFF1A12
\u89E3\u91CA\uFF1A\u5077\u7A83 1 \u53F7\u623F\u5C4B (\u91D1\u989D = 2), \u5077\u7A83 3 \u53F7\u623F\u5C4B (\u91D1\u989D = 9)\uFF0C\u63A5\u7740\u5077\u7A83 5 \u53F7\u623F\u5C4B (\u91D1\u989D = 1)\u3002
\u5077\u7A83\u5230\u7684\u6700\u9AD8\u91D1\u989D = 2 + 9 + 1 = 12 \u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= nums.length &lt;= 100 0 &lt;= nums[i] &lt;= 400</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u52A8\u6001\u89C4\u5212</code> \u7684\u601D\u60F3\u3002\u4EE5 <code>[2,7,9,3,1]</code> \u4E3A\u4F8B\u3002\u5728\u8FDB\u95E8\u5077\u4E4B\u524D\uFF0C\u5728\u95E8\u53E3\u5148\u601D\u8003\u4E00\u4E2A\u95EE\u9898\uFF1A\u5077\u8FD8\u662F\u4E0D\u5077\u3002\u6211\u4EEC\u6765\u770B\u4E0B\u6D41\u7A0B\uFF1A<br> \u6211\u4EEC\u5148\u51C6\u5907\u4E00\u4E2A\u8D26\u672C <code>list</code> \u6765\u7B97\u7B97\u600E\u4E48\u5077\u5212\u7B97\uFF0C\u73B0\u5728\u591C\u6DF1\u4EBA\u9759\uFF0C\u51C6\u5907\u5F00\u59CB\u5077\uFF01</p><ul><li>\u8DEF\u8FC7\u7B2C\u4E00\u5BB6\uFF0C\u5982\u679C\u6211\u5077\uFF0C\u90A3\u4E48\u6211\u5C31\u67092\u5757\u94B1\uFF0C\u4E0D\u5077\u6211\u5C31\u6CA1\u6709\u94B1\uFF0C\u90A3\u5C31\u5077\uFF01\u5C0F\u672C\u672C\u8BB0\u4E0B\uFF1A2\uFF0C\u5373 <code>Math.max(2, 0)</code></li><li>\u8DEF\u8FC7\u7B2C\u4E8C\u5BB6\uFF0C\u5982\u679C\u6211\u5077\uFF0C\u90A3\u4E48\u6211\u5C31\u67097\u5757\u94B1\uFF0C\u4E0D\u5077\u6211\u5C31\u67092\u5757\u94B1\uFF0C\u90A3\u5C31\u5077\uFF01\u5C0F\u672C\u672C\u8BB0\u4E0B\uFF1A7\uFF0C\u5373 <code>Math.max(7, 2)</code></li><li>\u8DEF\u8FC7\u7B2C\u4E09\u5BB6\uFF0C\u5982\u679C\u6211\u5077\uFF0C\u90A3\u4E48\u6211\u5C31\u670911\u5757\u94B1\uFF0C\u4E0D\u5077\u6211\u5C31\u67097\u5757\u94B1\uFF0C\u90A3\u5C31\u5077\uFF01\u5C0F\u672C\u672C\u8BB0\u4E0B\uFF1A11\uFF0C\u5373 <code>Math.max(11, 7)</code></li><li>\u8DEF\u8FC7\u7B2C\u56DB\u5BB6\uFF0C\u5982\u679C\u6211\u5077\uFF0C\u90A3\u4E48\u6211\u5C31\u670910\u5757\u94B1\uFF0C\u4E0D\u5077\u6211\u5C31\u670911\u5757\u94B1\uFF0C\u8840\u4E8F\uFF0C\u90A3\u5C31\u4E0D\u5077\uFF01\u5C0F\u672C\u672C\u8BB0\u4E0B\uFF1A10</li><li>\u8DEF\u8FC7\u7B2C\u4E94\u5BB6\uFF0C\u5982\u679C\u6211\u5077\uFF0C\u90A3\u4E48\u6211\u5C31\u670912\u5757\u94B1\uFF0C\u4E0D\u5077\u6211\u5C31\u670910\u5757\u94B1\uFF0C\u90A3\u5C31\u5077\uFF01\u5C0F\u672C\u672C\u8BB0\u4E0B\uFF1A12\uFF0C\u5373 <code>Math.max(12, 11)</code> \u4E00\u8F6E\u4E0B\u6765\uFF0C\u5C0F\u672C\u5B50\u4E0A\u8BB0\u4E0B\u7684\u6700\u540E\u90A3\u4E00\u7B14\uFF0C\u5C31\u662F\u6211\u80FD\u5077\u5230\u7684\u6700\u591A\u7684\u94B1\u3002</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u6253\u5BB6\u52AB\u820D
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span>
  <span class="token keyword">const</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> list<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">[</span>list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,11);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
