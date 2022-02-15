import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/arithmetic-practice/assets/preorderTraversal_1.8243b980.png",p="/arithmetic-practice/assets/preorderTraversal_2.a30da01d.png",e="/arithmetic-practice/assets/preorderTraversal_3.419d11a7.png";const t={},o=n('<h1 id="\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u8FD4\u56DE\u5B83\u8282\u70B9\u503C\u7684 <code>\u524D\u5E8F</code> \u904D\u5386\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><p><img src="'+a+`" alt="img_1.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1,null,2,3]
\u8F93\u51FA\uFF1A[1,2,3]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = []
\u8F93\u51FA\uFF1A[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B 3\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1]
\u8F93\u51FA\uFF1A[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a> \u793A\u4F8B 4\uFF1A</h4><p><img src="`+p+`" alt="img_1.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1,2]
\u8F93\u51FA\uFF1A[1,2]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-5" aria-hidden="true">#</a> \u793A\u4F8B 5\uFF1A</h4><p><img src="`+e+`" alt="img_1.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1,null,2]
\u8F93\u51FA\uFF1A[1,2]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><ul><li>\u6811\u4E2D\u8282\u70B9\u6570\u76EE\u5728\u8303\u56F4 <code>[0, 100]</code> \u5185</li><li>-100 &lt;= Node.val &lt;= 100</li></ul></div><div class="custom-container warning"><p class="custom-container-title">\u8FDB\u9636\uFF1A</p><p>\u9012\u5F52\u7B97\u6CD5\u5F88\u7B80\u5355\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FED\u4EE3\u7B97\u6CD5\u5B8C\u6210\u5417\uFF1F</p></div><h2 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u9012\u5F52</code> \u7684\u601D\u8DEF\u3002\u5982\u6CE8\u91CA\u6240\u6CE8\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">never</span>
  left<span class="token operator">:</span> TreeNode
  right<span class="token operator">:</span> TreeNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_root<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728\u6839\u8282\u70B9\uFF0C\u7EE7\u7EED\u5411\u4E0B\u67E5\u627E\uFF0C\u5426\u5219\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_root <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>_root<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06\u6839\u8282\u70B9\u63D2\u5165\u6570\u7EC4</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token comment">// \u5982\u679C\u5B58\u5728\u5DE6\u5B50\u8282\u70B9\uFF0C\u7EE7\u7EED\u904D\u5386</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5982\u679C\u5B58\u5728\u53F3\u5B50\u8282\u70B9\uFF0C\u7EE7\u7EED\u904D\u5386</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">getRes</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u8FED\u4EE3</code> \u7684\u601D\u8DEF\u3002\u5982\u6CE8\u91CA\u6240\u6CE8\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">never</span>
  left<span class="token operator">:</span> TreeNode
  right<span class="token operator">:</span> TreeNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_root<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u6808</span>
    <span class="token keyword">const</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// \u5982\u679C\u8282\u70B9\u5B58\u5728\uFF0C\u7EE7\u7EED\uFF0C\u5426\u5219\u8FD4\u56DE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_root <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>_root<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06\u6839\u7ED3\u70B9\u7684\u503C\u4FDD\u5B58</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token comment">// \u5C06\u53F3\u6811\u538B\u6808</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token comment">// \u5C06\u5DE6\u6811\u538B\u6808</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token comment">// \u5982\u679C\u6808\u5185\u6709\u503C\uFF0C\u53D6\u51FA\u9012\u5F52</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">getRes</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,24);function c(l,r){return o}var k=s(t,[["render",c]]);export{k as default};
