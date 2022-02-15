<template><h1 id="删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#删除链表的倒数第n个节点" aria-hidden="true">#</a> 删除链表的倒数第N个节点</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1], n = 1
输出：[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1,2], n = 1
输出：[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">提示：</p>
<p>链表中结点的数目为 sz
1 &lt;= sz &lt;= 30
0 &lt;= Node.val &lt;= 100
1 &lt;= n &lt;= sz</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li>先求出链表的长度</li>
<li>如果要删除的长度与链表长度一致，说明删除的是头节点，直接返回 <code>head.next</code> 即可</li>
<li>找到要删除的节点的上一个节点，将该节点的next赋值为要删除节点的下一个节点的next</li>
<li>返回head</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * 删除链表的倒数第N个节点
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> head
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> n
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> currentHead <span class="token operator">=</span> head
  <span class="token keyword">while</span><span class="token punctuation">(</span>currentHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    len <span class="token operator">+=</span> <span class="token number">1</span>
    currentHead <span class="token operator">=</span> currentHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 如果len === n,说明删除的是的头节点</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next
  <span class="token comment">// 否则找到要删除节点的上一个节点, 将指针指向删除节点的下一个节点</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> head
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn2925/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</template>
