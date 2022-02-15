<template><h1 id="二叉树的层序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的层序遍历" aria-hidden="true">#</a> 二叉树的层序遍历</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。</p>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>返回其层序遍历结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[
[3],
[9,20],
[15,7]
]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>如果当前节点不是空，则将当前节点存到 <code>nodes</code> 中，否则直接返回 <code>[]</code></li>
<li>调用 <code>getRes</code> 方法，遍历已经存起来的节点，并取出节点的左右值，同时将非空的左右节点存到 <code>nodes</code> 中</li>
<li>遍历完成后，将 <code>nodes</code> 当前的长度与之前的长度进行比较，如果比之前的长度长，说明有新的节点加入，则移除先前存储的节点</li>
<li>继续遍历，直到没有新的节点被推入为止，返回结果</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 二叉树的层序遍历
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[][]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">>></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nodes <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>
    <span class="token keyword">const</span> <span class="token function-variable function">getRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> length <span class="token operator">=</span> nodes<span class="token punctuation">.</span>length
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> values <span class="token operator">=</span> nodes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> nodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
          <span class="token keyword">return</span> node<span class="token punctuation">.</span>val
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">.</span>length <span class="token operator">></span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          nodes<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span>
          <span class="token function">getRes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">getRes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
