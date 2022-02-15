<template><h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1,2]
输出：[2,1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>链表中节点的数目范围是 [0, 5000]
-5000 &lt;= Node.val &lt;= 5000=</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>栈</code> 先进后出的思想。</p>
<ul>
<li>将链表压栈</li>
<li>如果栈为空，返回 <code>null</code></li>
<li>遍历栈，每次取出栈顶元素，拼接成新链表返回即可</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>栈中存的是翻转前的第一个节点，最后需要将它的 <code>next</code> 设置为 <code>null</code>，避免形成 <code>环</code>。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> head
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token comment">// 栈，存节点</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 将节点入栈</span>
  <span class="token keyword">let</span> preNode<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> head
  <span class="token keyword">while</span><span class="token punctuation">(</span>preNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>preNode<span class="token punctuation">)</span>
    preNode <span class="token operator">=</span> preNode<span class="token punctuation">.</span>next <span class="token operator">||</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果栈内是空，说明链表是空，返回null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token comment">// 拼接节点，形成新栈</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> newHead <span class="token operator">=</span> pre
  <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre<span class="token punctuation">.</span>next <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 最后一个节点存的是原始头结点，需要将其next置成空，否则会变成环</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> newHead
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div></template>
