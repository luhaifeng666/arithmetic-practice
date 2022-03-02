import{e as n}from"./app.b1495819.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5916\u89C2\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#\u5916\u89C2\u6570\u5217" aria-hidden="true">#</a> \u5916\u89C2\u6570\u5217</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570 n \uFF0C\u8F93\u51FA\u5916\u89C2\u6570\u5217\u7684\u7B2C n \u9879\u3002<br> \u300C\u5916\u89C2\u6570\u5217\u300D\u662F\u4E00\u4E2A\u6574\u6570\u5E8F\u5217\uFF0C\u4ECE\u6570\u5B57 1 \u5F00\u59CB\uFF0C\u5E8F\u5217\u4E2D\u7684\u6BCF\u4E00\u9879\u90FD\u662F\u5BF9\u524D\u4E00\u9879\u7684\u63CF\u8FF0\u3002<br> \u4F60\u53EF\u4EE5\u5C06\u5176\u89C6\u4F5C\u662F\u7531\u9012\u5F52\u516C\u5F0F\u5B9A\u4E49\u7684\u6570\u5B57\u5B57\u7B26\u4E32\u5E8F\u5217\uFF1A</p><ul><li>countAndSay(1) = &quot;1&quot;</li><li>countAndSay(n) \u662F\u5BF9 countAndSay(n-1) \u7684\u63CF\u8FF0\uFF0C\u7136\u540E\u8F6C\u6362\u6210\u53E6\u4E00\u4E2A\u6570\u5B57\u5B57\u7B26\u4E32\u3002 \u524D\u4E94\u9879\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.     1
2.     11
3.     21
4.     1211
5.     111221
\u7B2C\u4E00\u9879\u662F\u6570\u5B57 1
\u63CF\u8FF0\u524D\u4E00\u9879\uFF0C\u8FD9\u4E2A\u6570\u662F 1 \u5373 \u201C \u4E00 \u4E2A 1 \u201D\uFF0C\u8BB0\u4F5C &quot;11&quot;
\u63CF\u8FF0\u524D\u4E00\u9879\uFF0C\u8FD9\u4E2A\u6570\u662F 11 \u5373 \u201C \u4E8C \u4E2A 1 \u201D \uFF0C\u8BB0\u4F5C &quot;21&quot;
\u63CF\u8FF0\u524D\u4E00\u9879\uFF0C\u8FD9\u4E2A\u6570\u662F 21 \u5373 \u201C \u4E00 \u4E2A 2 + \u4E00 \u4E2A 1 \u201D \uFF0C\u8BB0\u4F5C &quot;1211&quot;
\u63CF\u8FF0\u524D\u4E00\u9879\uFF0C\u8FD9\u4E2A\u6570\u662F 1211 \u5373 \u201C \u4E00 \u4E2A 1 + \u4E00 \u4E2A 2 + \u4E8C \u4E2A 1 \u201D \uFF0C\u8BB0\u4F5C &quot;111221&quot;
\u8981 \u63CF\u8FF0 \u4E00\u4E2A\u6570\u5B57\u5B57\u7B26\u4E32\uFF0C\u9996\u5148\u8981\u5C06\u5B57\u7B26\u4E32\u5206\u5272\u4E3A \u6700\u5C0F \u6570\u91CF\u7684\u7EC4\uFF0C\u6BCF\u4E2A\u7EC4\u90FD\u7531\u8FDE\u7EED\u7684\u6700\u591A \u76F8\u540C\u5B57\u7B26 \u7EC4\u6210\u3002\u7136\u540E\u5BF9\u4E8E\u6BCF\u4E2A\u7EC4\uFF0C\u5148\u63CF\u8FF0\u5B57\u7B26\u7684\u6570\u91CF\uFF0C\u7136\u540E\u63CF\u8FF0\u5B57\u7B26\uFF0C\u5F62\u6210\u4E00\u4E2A\u63CF\u8FF0\u7EC4\u3002\u8981\u5C06\u63CF\u8FF0\u8F6C\u6362\u4E3A\u6570\u5B57\u5B57\u7B26\u4E32\uFF0C\u5148\u5C06\u6BCF\u7EC4\u4E2D\u7684\u5B57\u7B26\u6570\u91CF\u7528\u6570\u5B57\u66FF\u6362\uFF0C\u518D\u5C06\u6240\u6709\u63CF\u8FF0\u7EC4\u8FDE\u63A5\u8D77\u6765\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F8B\u5982\uFF0C\u6570\u5B57\u5B57\u7B26\u4E32 &quot;3322251&quot; \u7684\u63CF\u8FF0\u5982\u4E0B\u56FE\uFF1A <img src="https://pic.leetcode-cn.com/1629874763-TGmKUh-image.png" alt="\u5916\u89C2\u6570\u5217"></p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 1
\u8F93\u51FA\uFF1A&quot;1&quot;
\u89E3\u91CA\uFF1A\u8FD9\u662F\u4E00\u4E2A\u57FA\u672C\u6837\u4F8B\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 4
\u8F93\u51FA\uFF1A&quot;1211&quot;
\u89E3\u91CA\uFF1A
countAndSay(1) = &quot;1&quot;
countAndSay(2) = \u8BFB &quot;1&quot; = \u4E00 \u4E2A 1 = &quot;11&quot;
countAndSay(3) = \u8BFB &quot;11&quot; = \u4E8C \u4E2A 1 = &quot;21&quot;
countAndSay(4) = \u8BFB &quot;21&quot; = \u4E00 \u4E2A 2 + \u4E00 \u4E2A 1 = &quot;12&quot; + &quot;11&quot; = &quot;1211&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= n &lt;= 30</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5982\u679C\u4F20\u5165 <code>0</code>\uFF0C \u8FD4\u56DE\u7A7A\u4E32</li><li>\u5982\u679C\u4F20\u5165 <code>1</code>\uFF0C \u8FD4\u56DE <code>&#39;1&#39;</code></li><li>\u5229\u7528 <code>\u53CC\u6307\u9488</code> \u601D\u8DEF\uFF0C\u904D\u5386\u5B57\u7B26\u4E32\uFF0C\u4E0E\u5DE6\u6307\u9488\u6307\u5411\u7684\u5B57\u7B26\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u76F8\u540C\uFF0C\u8BA1\u6570\u5668+1\uFF0C\u5426\u5219\u62FC\u63A5 <code>\u5F53\u524D\u8BA1\u6570\u5668+\u5F53\u524D\u5B57\u7B26</code> \uFF0C\u6E05\u7A7A\u8BA1\u6570\u5668\uFF0C\u79FB\u52A8\u5DE6\u6307\u9488\u81F3\u5F53\u524D\u5B57\u7B26</li><li>\u518D\u5229\u7528 <code>\u9012\u5F52</code> \u7684\u601D\u60F3\u91CD\u590D\u4E0A\u9762\u7684\u904D\u5386\u6B65\u9AA4\uFF0C\u5236\u6B62\u7ED3\u675F\u5373\u53EF</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5916\u89C2\u6570\u5217
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> key <span class="token operator">=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res <span class="token operator">+=</span> count <span class="token operator">+</span> key
        key <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        count <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> res <span class="token operator">+=</span> count <span class="token operator">+</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    str <span class="token operator">=</span> res
    n<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,14);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};