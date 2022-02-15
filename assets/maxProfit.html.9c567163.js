import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii" tabindex="-1"><a class="header-anchor" href="#\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii" aria-hidden="true">#</a> \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 prices \uFF0C\u5176\u4E2D\xA0prices[i] \u8868\u793A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002<br> \u5728\u6BCF\u4E00\u5929\uFF0C\u4F60\u53EF\u80FD\u4F1A\u51B3\u5B9A\u8D2D\u4E70\u548C/\u6216\u51FA\u552E\u80A1\u7968\u3002\u4F60\u5728\u4EFB\u4F55\u65F6\u5019\xA0\u6700\u591A\xA0\u53EA\u80FD\u6301\u6709 \u4E00\u80A1 \u80A1\u7968\u3002\u4F60\u4E5F\u53EF\u4EE5\u8D2D\u4E70\u5B83\uFF0C\u7136\u540E\u5728 \u540C\u4E00\u5929 \u51FA\u552E\u3002 \u8FD4\u56DE \u4F60\u80FD\u83B7\u5F97\u7684 \u6700\u5927 \u5229\u6DA6\xA0\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: prices = [7,1,5,3,6,4]
\u8F93\u51FA: 7
\u89E3\u91CA: \u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 3 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 5\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 5-1 = 4 \u3002
\u968F\u540E\uFF0C\u5728\u7B2C 4 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 3\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 6-3 = 3 \u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: prices = [1,2,3,4,5]
\u8F93\u51FA: 4
\u89E3\u91CA: \u5728\u7B2C 1 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929 \uFF08\u80A1\u7968\u4EF7\u683C = 5\uFF09\u7684\u65F6\u5019\u5356\u51FA, \u8FD9\u7B14\u4EA4\u6613\u6240\u80FD\u83B7\u5F97\u5229\u6DA6 = 5-1 = 4 \u3002
\u6CE8\u610F\u4F60\u4E0D\u80FD\u5728\u7B2C 1 \u5929\u548C\u7B2C 2 \u5929\u63A5\u8FDE\u8D2D\u4E70\u80A1\u7968\uFF0C\u4E4B\u540E\u518D\u5C06\u5B83\u4EEC\u5356\u51FA\u3002\u56E0\u4E3A\u8FD9\u6837\u5C5E\u4E8E\u540C\u65F6\u53C2\u4E0E\u4E86\u591A\u7B14\u4EA4\u6613\uFF0C\u4F60\u5FC5\u987B\u5728\u518D\u6B21\u8D2D\u4E70\u524D\u51FA\u552E\u6389\u4E4B\u524D\u7684\u80A1\u7968\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B\xA03:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: prices = [7,6,4,3,1]
\u8F93\u51FA: 0
\u89E3\u91CA: \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= prices.length &lt;= 3 * 10 ^ 4 0 &lt;= prices[i] &lt;= 10 ^ 4</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><h3 id="\u89E3\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E00" aria-hidden="true">#</a> \u89E3\u6CD5\u4E00</h3><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u52A8\u6001\u89C4\u5212</code> \u7684\u601D\u60F3\u3002<br> \u5229\u6DA6\u5206\u4E3A\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ol><li>\u6301\u6709\u80A1\u7968\u65F6\u7684\u6700\u5927\u5229\u6DA6, \u8BB0\u4E3A <code>handInProfit</code><ol><li>\u5F53\u5929\u6709\u4EA4\u6613\uFF1A\u5982\u679C\u5F53\u5929\u6709\u4EA4\u6613\uFF0C\u8BF4\u660E\u5F53\u5929\u4E70\u5165\u4E86\u80A1\u7968\uFF0C\u90A3\u4E48\u6B64\u65F6\u6700\u5927\u7684\u5229\u6DA6\u5E94\u8BE5\u662F\u5F53\u524D\u5356\u51FA\u53BB\u7D2F\u8BA1\u7684\u5229\u6DA6 <code>handOutProfit</code> \u51CF\u53BB\u5F53\u5929\u80A1\u7968\u7684\u4EF7\u683C</li><li>\u5F53\u5929\u6CA1\u6709\u4EA4\u6613\uFF1A\u5982\u679C\u5F53\u5929\u6CA1\u6709\u4EA4\u6613\uFF0C\u8BF4\u660E\u624B\u4E2D\u6301\u6709\uFF0C\u90A3\u4E48\u6B64\u65F6\u6700\u5927\u7684\u5229\u6DA6\u5E94\u8BE5\u662F\u5F53\u524D\u6301\u6709\u80A1\u7968\u65F6\u7684\u6700\u5927\u5229\u6DA6 <code>handInProfit</code></li><li>\u4E24\u8005\u60C5\u51B5\u53D6\u6700\u5927\u503C\uFF0C\u5373\u4E3A\u6301\u6709\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6</li></ol></li><li>\u672A\u6301\u6709\u80A1\u7968\u65F6\u7684\u6700\u5927\u5229\u6DA6\uFF0C\u8BB0\u4E3A <code>handOutProfit</code><ol><li>\u5F53\u5929\u6709\u4EA4\u6613\uFF1A\u5982\u679C\u5F53\u5929\u6709\u4EA4\u6613\uFF0C\u8BF4\u660E\u5F53\u5929\u5356\u51FA\u4E86\u80A1\u7968\uFF0C\u90A3\u4E48\u6700\u5927\u5229\u6DA6\u5E94\u8BE5\u662F\u624B\u4E2D\u6301\u6709\u80A1\u7968\u7684\u7D2F\u8BA1\u5229\u6DA6 <code>handInProfit</code> \u52A0\u4E0A\u5F53\u5929\u5356\u51FA\u53BB\u7684\u4EF7\u683C</li><li>\u5F53\u5929\u6CA1\u6709\u4EA4\u6613\uFF1A\u5982\u679C\u5F53\u5929\u6CA1\u6709\u4EA4\u6613\uFF0C\u8BF4\u660E\u5F53\u5929\u6CA1\u6709\u5356\uFF0C\u90A3\u4E48\u6700\u5927\u5229\u6DA6\u5E94\u8BE5\u662F\u624B\u4E2D\u5F53\u524D\u5DF2\u7ECF\u5356\u51FA\u53BB\u7684\u7D2F\u8BA1\u5229\u6DA6 <code>handOutProfit</code></li><li>\u4E24\u8005\u60C5\u51B5\u53D6\u6700\u5927\u503C\uFF0C\u5373\u4E3A\u672A\u6301\u6709\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6 \u6700\u7EC8 <strong>\u624B\u4E2D\u6CA1\u6709\u6301\u6709\u80A1\u7968</strong> \u65F6\uFF0C\u5229\u6DA6\u80AF\u5B9A\u6700\u5927\uFF0C\u6240\u4EE5\u8FD4\u56DE <code>handOutProfit</code> \u5373\u53EF\u3002</li></ol></li></ol></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u52A8\u6001\u89C4\u5212</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">maxProfitByDp</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token comment">// \u5F53\u5929\u6301\u6709\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6</span>
  <span class="token keyword">let</span> handInProfit <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">// \u5F53\u5929\u672A\u6301\u6709\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6</span>
  <span class="token keyword">let</span> handOutProfit <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handInProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>handOutProfit <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> handInProfit<span class="token punctuation">)</span>
    handOutProfit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>handInProfit <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> handOutProfit<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u672A\u6301\u6709\u80A1\u7968\u65F6\u5229\u6DA6\u4F1A\u6700\u5927</span>
  <span class="token keyword">return</span> handOutProfit
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u89E3\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6CD5\u4E8C" aria-hidden="true">#</a> \u89E3\u6CD5\u4E8C</h3><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5229\u7528 <code>\u8D2A\u5FC3\u7B97\u6CD5</code> \u7684\u601D\u60F3\u3002\u53EA\u5728\u6DA8\u7684\u65F6\u5019\u5356\uFF0C\u5373\u5224\u65AD\u540E\u4E00\u5929\u7684\u4EF7\u683C\u9AD8\u4E8E\u524D\u4E00\u5929\u7684\u65F6\u5019\u624D\u8FDB\u884C\u4E70\u5356\u80A1\u7968\u7684\u64CD\u4F5C\uFF0C\u6700\u7EC8\u6240\u6709\u5229\u6DA6\u7684\u548C\u5373\u4E3A\u6700\u5927\u5229\u6DA6\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8D2A\u5FC3\u7B97\u6CD5</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>prices<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> total <span class="token operator">+=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,17);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
