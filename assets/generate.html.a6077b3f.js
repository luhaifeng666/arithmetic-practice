import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/arithmetic-practice/assets/generate.a5acd4ab.gif";const p={},e=n('<h1 id="\u6768\u8F89\u4E09\u89D2" tabindex="-1"><a class="header-anchor" href="#\u6768\u8F89\u4E09\u89D2" aria-hidden="true">#</a> \u6768\u8F89\u4E09\u89D2</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u975E\u8D1F\u6574\u6570 <code>numRows</code>\uFF0C\u751F\u6210\u300C\u6768\u8F89\u4E09\u89D2\u300D\u7684\u524D <code>numRows</code> \u884C\u3002<br><img src="'+a+`" alt="img.png"> <br> \u5728\u300C\u6768\u8F89\u4E09\u89D2\u300D\u4E2D\uFF0C\u6BCF\u4E2A\u6570\u662F\u5B83\u5DE6\u4E0A\u65B9\u548C\u53F3\u4E0A\u65B9\u7684\u6570\u7684\u548C\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: numRows = 5
\u8F93\u51FA: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: numRows = 1
\u8F93\u51FA: [[1]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A:</p><p>1 &lt;= numRows &lt;= 30</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p><code>\u6768\u8F89\u4E09\u89D2</code> \u9664\u7B2C\u4E00\u9879\u5916\uFF0C\u5176\u4ED6\u6BCF\u9879\u7684\u9996\u4F4D\u90FD\u662F <code>1</code>\uFF0C \u6211\u4EEC\u53EA\u8981\u5C06\u4E0A\u4E00\u9879\u7684\u4E24\u6570\u4E4B\u548C\u63D2\u5165\u5230 <code>[1, 1]</code> \u4E4B\u95F4\u5373\u53EF\u3002<br></p><ul><li>\u5982\u679C\u7ED9\u5B9A\u957F\u5EA6\u662F1\uFF0C\u76F4\u63A5\u8FD4\u56DE <code>[[1]]</code></li><li>\u5982\u679C\u7ED9\u5B9A\u957F\u5EA6\u662F2\uFF0C\u76F4\u63A5\u8FD4\u56DE <code>[[1], [1, 1]]</code></li><li>\u904D\u5386\u524D\u4E00\u9879\uFF0C\u5C06\u524D\u540E\u4E24\u9879\u76F8\u52A0\uFF0C\u63D2\u5165\u5230 <code>[1, 1]</code> \u6570\u7EC4\u7684\u5BF9\u5E94\u4F4D\u7F6E\u5373\u53EF\u3002</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> numRows
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[][]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>numRows<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> numRows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">const</span> preArr <span class="token operator">=</span> res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> preArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> preArr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> preArr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,11);function t(o,c){return e}var u=s(p,[["render",t]]);export{u as default};
