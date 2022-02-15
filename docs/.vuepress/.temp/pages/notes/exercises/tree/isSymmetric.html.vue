<template><h1 id="对称二叉树" tabindex="-1"><a class="header-anchor" href="#对称二叉树" aria-hidden="true">#</a> 对称二叉树</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给定一个二叉树，检查它是否是镜像对称的。<br>
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1
   / \
  2   2
 / \ / \
3  4 4  3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:</p>
<pre><code>1
</code></pre>
<p>/ <br>
2   2
\   <br>
3   3</p>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>如果当前树是 <code>null</code>，直接返回 <code>true</code></li>
<li>如果左右子节点都是 <code>null</code>，返回 <code>true</code></li>
<li>将左节点的左值与右节点的右值进行比较，将左节点的右值与右节点的左值进行比较，如果不相等则返回 <code>false</code></li>
<li>递归执行这个过程，直到结束</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 对称二叉树
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> <span class="token function-variable function">validate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> r <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> l<span class="token punctuation">.</span>val <span class="token operator">!==</span> r<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">return</span> <span class="token function">validate</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>left<span class="token punctuation">,</span> r<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">validate</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>right<span class="token punctuation">,</span> r<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">validate</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
