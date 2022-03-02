import{e as n}from"./app.b1495819.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u5BF9\u79F0\u4E8C\u53C9\u6811</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u68C0\u67E5\u5B83\u662F\u5426\u662F\u955C\u50CF\u5BF9\u79F0\u7684\u3002<br> \u4F8B\u5982\uFF0C\u4E8C\u53C9\u6811\xA0[1,2,2,3,4,4,3] \u662F\u5BF9\u79F0\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1
   / \\
  2   2
 / \\ / \\
3  4 4  3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F46\u662F\u4E0B\u9762\u8FD9\u4E2A\xA0[1,2,2,null,3,null,3] \u5219\u4E0D\u662F\u955C\u50CF\u5BF9\u79F0\u7684:</p><pre><code>1
</code></pre><p>/ <br> 2 2 \\ <br> 3 3</p><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5982\u679C\u5F53\u524D\u6811\u662F <code>null</code>\uFF0C\u76F4\u63A5\u8FD4\u56DE <code>true</code></li><li>\u5982\u679C\u5DE6\u53F3\u5B50\u8282\u70B9\u90FD\u662F <code>null</code>\uFF0C\u8FD4\u56DE <code>true</code></li><li>\u5C06\u5DE6\u8282\u70B9\u7684\u5DE6\u503C\u4E0E\u53F3\u8282\u70B9\u7684\u53F3\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5C06\u5DE6\u8282\u70B9\u7684\u53F3\u503C\u4E0E\u53F3\u8282\u70B9\u7684\u5DE6\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u4E0D\u76F8\u7B49\u5219\u8FD4\u56DE <code>false</code></li><li>\u9012\u5F52\u6267\u884C\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u7ED3\u675F</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5BF9\u79F0\u4E8C\u53C9\u6811
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> <span class="token function-variable function">validate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> r <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> l<span class="token punctuation">.</span>val <span class="token operator">!==</span> r<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> <span class="token function">validate</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>left<span class="token punctuation">,</span> r<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">validate</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>right<span class="token punctuation">,</span> r<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">validate</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,10);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};