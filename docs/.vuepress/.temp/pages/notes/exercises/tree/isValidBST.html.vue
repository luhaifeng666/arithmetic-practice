<template><h1 id="验证二叉搜索树" tabindex="-1"><a class="header-anchor" href="#验证二叉搜索树" aria-hidden="true">#</a> 验证二叉搜索树</h1>
<p>给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。<br>
有效 二叉搜索树定义如下：</p>
<blockquote>
<p>节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。</p>
</blockquote>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [2,1,3]
输出：true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>树中节点数目范围在[1, 104] 内
-231 &lt;= Node.val &lt;= 231 - 1</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@param</span> <span class="token parameter">min</span>
 * <span class="token keyword">@param</span> <span class="token parameter">max</span>
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">isValidate</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> min <span class="token operator">||</span> root<span class="token punctuation">.</span>val <span class="token operator">>=</span> max<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token function">isValidate</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> min<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidate</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isValidate</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span> <span class="token number">Infinity</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
