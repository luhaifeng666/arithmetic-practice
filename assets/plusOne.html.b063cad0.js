import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u52A0\u4E00" tabindex="-1"><a class="header-anchor" href="#\u52A0\u4E00" aria-hidden="true">#</a> \u52A0\u4E00</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u7531 <code>\u6574\u6570</code> \u7EC4\u6210\u7684 <code>\u975E\u7A7A</code> \u6570\u7EC4\u6240\u8868\u793A\u7684\u975E\u8D1F\u6574\u6570\uFF0C\u5728\u8BE5\u6570\u7684\u57FA\u7840\u4E0A\u52A0\u4E00\u3002<br> \u6700\u9AD8\u4F4D\u6570\u5B57\u5B58\u653E\u5728\u6570\u7EC4\u7684\u9996\u4F4D\uFF0C \u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u53EA\u5B58\u50A8<strong>\u5355\u4E2A</strong>\u6570\u5B57\u3002<br> \u4F60\u53EF\u4EE5\u5047\u8BBE\u9664\u4E86\u6574\u6570 <code>0</code> \u4E4B\u5916\uFF0C\u8FD9\u4E2A\u6574\u6570\u4E0D\u4F1A\u4EE5\u96F6\u5F00\u5934\u3002</p><h4 id="\u793A\u4F8B1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B1" aria-hidden="true">#</a> \u793A\u4F8B1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Adigits = [1,2,3]
\u8F93\u51FA\uFF1A[1,2,4]
\u89E3\u91CA\uFF1A\u8F93\u5165\u6570\u7EC4\u8868\u793A\u6570\u5B57 123\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B2" aria-hidden="true">#</a> \u793A\u4F8B2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Adigits = [4,3,2,1]
\u8F93\u51FA\uFF1A[4,3,2,2]
\u89E3\u91CA\uFF1A\u8F93\u5165\u6570\u7EC4\u8868\u793A\u6570\u5B57 4321\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B3" aria-hidden="true">#</a> \u793A\u4F8B3\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Adigits = [0]
\u8F93\u51FA\uFF1A[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A\uFF1A</h4><ul><li>1 &lt;= digits.length &lt;= 100</li><li>0 &lt;= digits[i] &lt;= 9</li></ul><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5C06\u6570\u7EC4\u4ECE\u540E\u5F80\u524D\u904D\u5386\u3002<br> \u5982\u679C\u6700\u540E\u4E00\u4F4D\u4E0D\u662F9\u7684\u8BDD\uFF0C\u76F4\u63A5\u5C06\u6700\u540E\u4E00\u4F4D\u52A0\u4E00\uFF0C\u5E76\u8FD4\u56DE\u6570\u7EC4\uFF1B<br> \u5982\u679C\u6700\u540E\u4E00\u4F4D\u662F9\uFF0C\u5219\u5148\u5C06\u6700\u540E\u4E00\u4F4D\u53D8\u62100\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C\u5FAA\u73AF;<br> \u82E5\u80FD\u6267\u884C\u5230\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5219\u8BF4\u660E\u6BCF\u4E00\u4F4D\u90FD\u662F9\uFF0C\u90A3\u4E48\u53EA\u9700\u8981\u5728\u904D\u5386\u8FC7\u540E\u7684\u6570\u5B57\u5F00\u5934\u63D2\u51651\u5373\u53EF\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> digits
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">plusOne</span> <span class="token punctuation">(</span>digits<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7A7A\u6570\u7EC4\u76F4\u63A5\u8FD4\u56DE</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>digits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u4ECE\u540E\u5F80\u524D\u904D\u5386</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> digits<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6700\u540E\u4E00\u4F4D\u662F9\uFF0C\u5219\u5C06\u5B83\u53D8\u62100</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5426\u5219\u76F4\u63A5+1\u8FD4\u56DE</span>
      digits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span>
      <span class="token keyword">return</span> digits
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5982\u679C\u6570\u7EC4\u4E2D\u90FD\u662F9\uFF0C\u5219\u4F1A\u8D70\u5230\u8FD9\u4E00\u6B65</span>
  <span class="token comment">// \u5C06\u6240\u6709\u6570\u53D8\u62100\u4E4B\u540E\uFF0C\u6570\u7EC4\u5934\u90E8\u63D2\u51651\u5373\u53EF</span>
  digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> digits
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,14);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
