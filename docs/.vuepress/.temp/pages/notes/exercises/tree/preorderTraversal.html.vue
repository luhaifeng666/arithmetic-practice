<template><h1 id="二叉树的前序遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的前序遍历" aria-hidden="true">#</a> 二叉树的前序遍历</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你二叉树的根节点 root ，返回它节点值的 <code>前序</code> 遍历。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<p><img src="@source/.vuepress/public/images/tree/preorderTraversal_1.png" alt="img_1.png"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [1,null,2,3]
输出：[1,2,3]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = []
输出：[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [1]
输出：[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h4>
<p><img src="@source/.vuepress/public/images/tree/preorderTraversal_2.png" alt="img_1.png"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [1,2]
输出：[1,2]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例 5：</h4>
<p><img src="@source/.vuepress/public/images/tree/preorderTraversal_3.png" alt="img_1.png"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：root = [1,null,2]
输出：[1,2]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<ul>
<li>树中节点数目在范围 <code>[0, 100]</code> 内</li>
<li>-100 &lt;= Node.val &lt;= 100</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">进阶：</p>
<p>递归算法很简单，你可以通过迭代算法完成吗？</p>
</div>
<h2 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>递归</code> 的思路。如注释所注。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">never</span>
  left<span class="token operator">:</span> TreeNode
  right<span class="token operator">:</span> TreeNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_root<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果存在根节点，继续向下查找，否则直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_root <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>_root<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将根节点插入数组</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token comment">// 如果存在左子节点，继续遍历</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果存在右子节点，继续遍历</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">getRes</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>迭代</code> 的思路。如注释所注。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">never</span>
  left<span class="token operator">:</span> TreeNode
  right<span class="token operator">:</span> TreeNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span> root
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getRes</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_root<span class="token operator">?</span><span class="token operator">:</span> TreeNode<span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义栈</span>
    <span class="token keyword">const</span> stack<span class="token operator">:</span> TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// 如果节点存在，继续，否则返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_root <span class="token operator">&amp;&amp;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>_root<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将根结点的值保存</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
      <span class="token comment">// 将右树压栈</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
      <span class="token comment">// 将左树压栈</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>_root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
      <span class="token comment">// 如果栈内有值，取出递归</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getRes</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">getRes</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
