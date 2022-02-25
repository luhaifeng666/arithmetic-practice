import{e as n}from"./app.86ce3a0a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879" aria-hidden="true">#</a> \u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u6709\u5E8F\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60 \u539F\u5730 \u5220\u9664\u91CD\u590D\u51FA\u73B0\u7684\u5143\u7D20\uFF0C\u4F7F\u6BCF\u4E2A\u5143\u7D20 \u53EA\u51FA\u73B0\u4E00\u6B21 \uFF0C\u8FD4\u56DE\u5220\u9664\u540E\u6570\u7EC4\u7684\u65B0\u957F\u5EA6\u3002<br> \u4E0D\u8981\u4F7F\u7528\u989D\u5916\u7684\u6570\u7EC4\u7A7A\u95F4\uFF0C\u4F60\u5FC5\u987B\u5728 \u539F\u5730 \u4FEE\u6539\u8F93\u5165\u6570\u7EC4 \u5E76\u5728\u4F7F\u7528 O(1) \u989D\u5916\u7A7A\u95F4\u7684\u6761\u4EF6\u4E0B\u5B8C\u6210\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E:</p><p>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u6570\u503C\u662F\u6574\u6570\uFF0C\u4F46\u8F93\u51FA\u7684\u7B54\u6848\u662F\u6570\u7EC4\u5462?<br> \u8BF7\u6CE8\u610F\uFF0C\u8F93\u5165\u6570\u7EC4\u662F\u4EE5\u300C\u5F15\u7528\u300D\u65B9\u5F0F\u4F20\u9012\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002<br></p></div><p>\u4F60\u53EF\u4EE5\u60F3\u8C61\u5185\u90E8\u64CD\u4F5C\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// nums \u662F\u4EE5\u201C\u5F15\u7528\u201D\u65B9\u5F0F\u4F20\u9012\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u5BF9\u5B9E\u53C2\u505A\u4EFB\u4F55\u62F7\u8D1D
int len = removeDuplicates(nums);

// \u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002
// \u6839\u636E\u4F60\u7684\u51FD\u6570\u8FD4\u56DE\u7684\u957F\u5EA6, \u5B83\u4F1A\u6253\u5370\u51FA\u6570\u7EC4\u4E2D \u8BE5\u957F\u5EA6\u8303\u56F4\u5185 \u7684\u6240\u6709\u5143\u7D20\u3002
for (int i = 0; i &lt; len; i++) {
  print(nums[i]);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [1,1,2]
\u8F93\u51FA\uFF1A2, nums = [1,2]
\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 2 \uFF0C\u5E76\u4E14\u539F\u6570\u7EC4 nums \u7684\u524D\u4E24\u4E2A\u5143\u7D20\u88AB\u4FEE\u6539\u4E3A 1, 2 \u3002\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [0,0,1,1,1,2,2,3,3,4]
\u8F93\u51FA\uFF1A5, nums = [0,1,2,3,4]
\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 5 \uFF0C \u5E76\u4E14\u539F\u6570\u7EC4 nums \u7684\u524D\u4E94\u4E2A\u5143\u7D20\u88AB\u4FEE\u6539\u4E3A 0, 1, 2, 3, 4 \u3002\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u53CC\u6307\u9488</code>\uFF0C\u5DE6\u6307\u9488\u4ECE\u7D22\u5F150\u7684\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u53F3\u6307\u9488\u4ECE\u7D22\u5F151\u7684\u4F4D\u7F6E\u5F00\u59CB\u3002<br> \u5411\u53F3\u79FB\u52A8\u53F3\u6307\u9488\uFF0C\u5F53\u53F3\u6307\u9488\u7684\u503C\u4E0E\u5DE6\u6307\u9488\u7684\u503C\u4E0D\u76F8\u7B49\u65F6\uFF0C\u5C06\u5DE6\u6307\u9488\u7684\u7D22\u5F15\u503C+1\uFF0C\u5E76\u5C06\u53F3\u6307\u9488\u7684\u503C\u8D4B\u503C\u7ED9\u5DE6\u6307\u9488\u3002<br> \u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5FAA\u73AF\u76F4\u5230\u7ED3\u675F\u5373\u53EF\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u5220\u9664\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879
 * <span class="token keyword">@param</span> <span class="token parameter">nums</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span>nums<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u4E0D\u662F\u6570\u7EC4\uFF0C\u8FD4\u56DE0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// \u5982\u679C\u6570\u7EC4\u957F\u5EA6\u5C0F\u4E8E2\uFF0C\u8FD4\u56DE\u6570\u7EC4\u957F\u5EA6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length
  <span class="token comment">// \u4F7F\u7528\u53CC\u6307\u9488\u65B9\u6CD5\u539F\u5730\u5220\u9664\u5143\u7D20</span>
  <span class="token keyword">let</span> <span class="token constant">L</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5DE6\u6307\u9488\u7684\u503C\u4E0D\u7B49\u4E8E\u53F3\u6307\u9488\u7684\u503C\uFF0C\u5219\u5C06\u5DE6\u6307\u9488\u53F3\u79FB\u4E00\u4F4D\uFF0C\u5E76\u5C06\u53F3\u6307\u9488\u5F53\u524D\u7684\u503C\u8D4B\u503C\u7ED9\u5DE6\u6307\u9488\u7684\u503C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token constant">L</span><span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token constant">L</span> <span class="token operator">+=</span> <span class="token number">1</span>
      nums<span class="token punctuation">[</span><span class="token constant">L</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token constant">L</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,13);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};