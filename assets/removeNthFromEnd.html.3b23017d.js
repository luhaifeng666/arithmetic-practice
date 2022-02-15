import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2Cn\u4E2A\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2CN\u4E2A\u8282\u70B9</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u94FE\u8868\uFF0C\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C\xA0n\xA0\u4E2A\u7ED3\u70B9\uFF0C\u5E76\u4E14\u8FD4\u56DE\u94FE\u8868\u7684\u5934\u7ED3\u70B9\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4,5], n = 2
\u8F93\u51FA\uFF1A[1,2,3,5]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [1], n = 1
\u8F93\u51FA\uFF1A[]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B 3\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [1,2], n = 1
\u8F93\u51FA\uFF1A[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>\u94FE\u8868\u4E2D\u7ED3\u70B9\u7684\u6570\u76EE\u4E3A sz 1 &lt;= sz &lt;= 30 0 &lt;= Node.val &lt;= 100 1 &lt;= n &lt;= sz</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5148\u6C42\u51FA\u94FE\u8868\u7684\u957F\u5EA6</li><li>\u5982\u679C\u8981\u5220\u9664\u7684\u957F\u5EA6\u4E0E\u94FE\u8868\u957F\u5EA6\u4E00\u81F4\uFF0C\u8BF4\u660E\u5220\u9664\u7684\u662F\u5934\u8282\u70B9\uFF0C\u76F4\u63A5\u8FD4\u56DE <code>head.next</code> \u5373\u53EF</li><li>\u627E\u5230\u8981\u5220\u9664\u7684\u8282\u70B9\u7684\u4E0A\u4E00\u4E2A\u8282\u70B9\uFF0C\u5C06\u8BE5\u8282\u70B9\u7684next\u8D4B\u503C\u4E3A\u8981\u5220\u9664\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684next</li><li>\u8FD4\u56DEhead</li></ul></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2CN\u4E2A\u8282\u70B9
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
  <span class="token comment">// \u5982\u679Clen === n,\u8BF4\u660E\u5220\u9664\u7684\u662F\u7684\u5934\u8282\u70B9</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next
  <span class="token comment">// \u5426\u5219\u627E\u5230\u8981\u5220\u9664\u8282\u70B9\u7684\u4E0A\u4E00\u4E2A\u8282\u70B9, \u5C06\u6307\u9488\u6307\u5411\u5220\u9664\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u8282\u70B9</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> head
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u4F5C\u8005\uFF1A\u529B\u6263 (LeetCode) \u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn2925/ \u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p>`,14);function p(t,l){return e}var c=s(a,[["render",p]]);export{c as default};
