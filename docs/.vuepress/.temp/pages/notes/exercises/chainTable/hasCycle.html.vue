<template><h1 id="环形链表" tabindex="-1"><a class="header-anchor" href="#环形链表" aria-hidden="true">#</a> 环形链表</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个链表的头节点 head ，判断链表中是否有环。<br>
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。<br>
如果链表中存在环 ，则返回 true 。 否则，返回 false 。</p>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>链表中节点的数目范围是 [0, 10 ^ 4]
-10 ^ 5 &lt;= Node.val &lt;= 10 ^ 5
pos 为 -1 或者链表中的一个 <code>有效索引</code> 。</p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<h3 id="解法一" tabindex="-1"><a class="header-anchor" href="#解法一" aria-hidden="true">#</a> 解法一</h3>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>利用 <code>快慢指针</code> 的思想。设定一个慢指针，每次走一步，设定一个快指针，每次走两步，如果有环的话，快慢指针一定会相遇。如果快指针指到了 <code>null</code>， 说明没有环。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 环形链表
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> head
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token comment">// 快慢指针</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token keyword">let</span> low <span class="token operator">=</span> head<span class="token punctuation">.</span>next
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>low <span class="token operator">===</span> fast<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      low <span class="token operator">=</span> low<span class="token punctuation">.</span>next
      fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="解法二" tabindex="-1"><a class="header-anchor" href="#解法二" aria-hidden="true">#</a> 解法二</h3>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p>将指针存放到集合中，如果存在重复，说明有环，否则说明没有环。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 存放集合</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasCycleByList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> node <span class="token operator">=</span> head
  <span class="token keyword">while</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    node <span class="token operator">=</span> node<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="解法三" tabindex="-1"><a class="header-anchor" href="#解法三" aria-hidden="true">#</a> 解法三</h3>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<p><code>删除节点</code>，就是将节点指向自己。如果有环，最后一定有：<code>head === head.next</code>, 否则就是没有环。</p>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 删除节点</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hasCycleByDeleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  head<span class="token punctuation">.</span>next <span class="token operator">=</span> head
  <span class="token keyword">return</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
