<template><h1 id="合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#合并两个有序链表" aria-hidden="true">#</a> 合并两个有序链表</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：l1 = [], l2 = []
输出：[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：l1 = [], l2 = [0]
输出：[0]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">提示：</p>
<p>两个链表的节点数目范围是 <code>[0, 50]</code>
-100 &lt;= Node.val &lt;= 100
<code>l1</code> 和 <code>l2</code> 均按 <code>非递减顺序</code> 排列</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>新建一个空的链表</li>
<li>由于是有序列表，比对链表最开始的节点，将小的添加到新链表上，循环这个过程</li>
<li>循环结束后，如果有链表没有被遍历完，则将其剩下的部分直接挂载到新链表尾部即可</li>
<li>注意，最后要返回的是 <strong>新链表的next</strong>，因为新链表在创建时是从0开始的，所以要从下一个节点开始返回</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ListNodeType</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">number</span>
  next<span class="token operator">:</span> ListNodeType <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// Definition for singly-linked list.</span>
<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> ListNodeType<span class="token punctuation">,</span> val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next<span class="token operator">===</span><span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> list1
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> list2
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list1 <span class="token operator">||</span> list2
  <span class="token keyword">let</span> newList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> curr <span class="token operator">=</span> newList
  <span class="token keyword">while</span><span class="token punctuation">(</span>list1 <span class="token operator">&amp;&amp;</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">></span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curr<span class="token punctuation">.</span>next <span class="token operator">=</span> list2
      list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      curr<span class="token punctuation">.</span>next <span class="token operator">=</span> list1
      list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  curr<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">||</span> list2
  <span class="token comment">// newList从0开始，第一个节点是下一个节点，所以要返回next</span>
  <span class="token keyword">return</span> newList<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>
