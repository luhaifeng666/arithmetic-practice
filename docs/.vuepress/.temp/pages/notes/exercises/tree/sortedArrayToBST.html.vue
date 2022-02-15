<template><h1 id="将有序数组转换为二叉搜索树" tabindex="-1"><a class="header-anchor" href="#将有序数组转换为二叉搜索树" aria-hidden="true">#</a> 将有序数组转换为二叉搜索树</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。<br>
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<p><img src="@source/.vuepress/public/images/tree/btree1.jpeg" alt="img_1.png"></p>
<blockquote>
<p>输入：nums = [-10,-3,0,5,9] <br>
输出：[0,-3,9,-10,null,5] <br>
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：<br>
<img src="@source/.vuepress/public/images/tree/btree2.jpeg" alt="img_1.png"></p>
</blockquote>
<h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<p><img src="@source/.vuepress/public/images/tree/btree.jpeg" alt="img_1.png"></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= nums.length &lt;= 10 ^ 4
-10 ^ 4 &lt;= nums[i] &lt;= 10 ^ 4
nums 按 <code>严格递增</code> 顺序排列</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>递归 + 二分法</code> 的思想。<br>
每次取数组的中间节点为根节点，将左侧的数据挂到左树，右侧的数据挂到右树，以此类推。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> left<span class="token operator">?</span><span class="token punctuation">,</span> right<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sortedArrayToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> root
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
