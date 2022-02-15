import{e as n}from"./app.7a2ce060.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var s="/arithmetic-practice/assets/img.6f6d2415.png",e="/arithmetic-practice/assets/img_1.0d42d3c2.png",t="/arithmetic-practice/assets/img_2.b253b5c0.png";const p={},r=n('<h1 id="\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8BF7\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u4E8E \u5220\u9664\u5355\u94FE\u8868\u4E2D\u67D0\u4E2A\u7279\u5B9A\u8282\u70B9 \u3002\u5728\u8BBE\u8BA1\u51FD\u6570\u65F6\u9700\u8981\u6CE8\u610F\uFF0C\u4F60\u65E0\u6CD5\u8BBF\u95EE\u94FE\u8868\u7684\u5934\u8282\u70B9head \uFF0C\u53EA\u80FD\u76F4\u63A5\u8BBF\u95EE \u8981\u88AB\u5220\u9664\u7684\u8282\u70B9 \u3002<br> \u9898\u76EE\u6570\u636E\u4FDD\u8BC1\u9700\u8981\u5220\u9664\u7684\u8282\u70B9 \u4E0D\u662F\u672B\u5C3E\u8282\u70B9 \u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div align="center"><p><img src="'+s+`" alt="img.png"></p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [4,5,1,9], node = 5
\u8F93\u51FA\uFF1A[4,1,9]
\u89E3\u91CA\uFF1A\u6307\u5B9A\u94FE\u8868\u4E2D\u503C\u4E3A 5 \u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 1 -&gt; 9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div align="center"><p><img src="`+e+`" alt="img_1.png"></p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [4,5,1,9], node = 1
\u8F93\u51FA\uFF1A[4,5,9]
\u89E3\u91CA\uFF1A\u6307\u5B9A\u94FE\u8868\u4E2D\u503C\u4E3A 1 \u7684\u7B2C\u4E09\u4E2A\u8282\u70B9\uFF0C\u90A3\u4E48\u5728\u8C03\u7528\u4E86\u4F60\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BE5\u94FE\u8868\u5E94\u53D8\u4E3A 4 -&gt; 5 -&gt; 9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B 3\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [1,2,3,4], node = 3
\u8F93\u51FA\uFF1A[1,2,4]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a> \u793A\u4F8B 4\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [0,1], node = 0
\u8F93\u51FA\uFF1A[1]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-5" aria-hidden="true">#</a> \u793A\u4F8B 5\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [-3,5,-99], node = -3
\u8F93\u51FA\uFF1A[5,-99]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u8303\u56F4\u662F [2, 1000] -1000 &lt;= Node.val &lt;= 1000 \u94FE\u8868\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\u90FD\u662F\u552F\u4E00\u7684 \u9700\u8981\u5220\u9664\u7684\u8282\u70B9 node \u662F \u94FE\u8868\u4E2D\u7684\u4E00\u4E2A\u6709\u6548\u8282\u70B9 \uFF0C\u4E14 \u4E0D\u662F\u672B\u5C3E\u8282\u70B9</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u8FD9\u4E2A\u9898\u76EE\u770B\u8D77\u6765\u6709\u70B9\u8D39\u89E3\uFF0C\u793A\u4F8B\u4E2D\u63D0\u4F9B\u4E86 <code>head</code> \u4EE5\u53CA <code>node</code> \uFF0C\u4F46\u662F\u65B9\u6CD5\u4E2D\u53EA\u4F20\u5165\u4E86node\u3002\u4E8E\u662F\u6211\u5C06\u5165\u53C2\u6253\u5370\u51FA\u6765\u770B\u4E86\u4E0B\uFF1A <img src="`+t+`" alt="img_2.png"> \u539F\u6765\u662F\u4E2A\u94FE\u5F0F\u7684\u5BF9\u8C61\u3002<br> \u7ED3\u5408\u8F93\u51FA\u4E2D\u7684\u5185\u5BB9\uFF0C\u4EE5\u53CA\u8F93\u51FA\u7684\u9884\u671F\u7ED3\u679C\uFF0C\u5F97\u77E5\u8FD9\u9053\u9898\u76EE\u771F\u6B63\u7684\u76EE\u7684\u662F\u5220\u9664\u7ED9\u5B9Anode\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u6B64\u5C31\u7B80\u5355\u591A\u4E86\u3002<br><strong>\u4E3B\u8981\u601D\u8DEF\u5C31\u662F\u7528\u540E\u4E00\u4E2A\u8282\u70B9\u8986\u76D6\u7B2C\u4E00\u4E2A\u8282\u70B9\u5373\u53EF\u3002</strong></p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span> node
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify node in-place instead.
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  val<span class="token operator">:</span> <span class="token builtin">number</span>
  next<span class="token operator">:</span> Node
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token operator">:</span> Node<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  node<span class="token punctuation">.</span>val <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
  node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,19);function c(i,l){return r}var u=a(p,[["render",c]]);export{u as default};