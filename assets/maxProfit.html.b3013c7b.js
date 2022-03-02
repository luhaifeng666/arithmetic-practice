import{e}from"./app.b1495819.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h1 id="\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A" aria-hidden="true">#</a> \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4 prices \uFF0C\u5B83\u7684\u7B2C\xA0i \u4E2A\u5143\u7D20\xA0prices[i] \u8868\u793A\u4E00\u652F\u7ED9\u5B9A\u80A1\u7968\u7B2C i \u5929\u7684\u4EF7\u683C\u3002<br> \u4F60\u53EA\u80FD\u9009\u62E9 \u67D0\u4E00\u5929 \u4E70\u5165\u8FD9\u53EA\u80A1\u7968\uFF0C\u5E76\u9009\u62E9\u5728 \u672A\u6765\u7684\u67D0\u4E00\u4E2A\u4E0D\u540C\u7684\u65E5\u5B50 \u5356\u51FA\u8BE5\u80A1\u7968\u3002\u8BBE\u8BA1\u4E00\u4E2A\u7B97\u6CD5\u6765\u8BA1\u7B97\u4F60\u6240\u80FD\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002<br> \u8FD4\u56DE\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u7B14\u4EA4\u6613\u4E2D\u83B7\u53D6\u7684\u6700\u5927\u5229\u6DA6\u3002\u5982\u679C\u4F60\u4E0D\u80FD\u83B7\u53D6\u4EFB\u4F55\u5229\u6DA6\uFF0C\u8FD4\u56DE 0 \u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A[7,1,5,3,6,4]
\u8F93\u51FA\uFF1A5
\u89E3\u91CA\uFF1A\u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002
\u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\uFF1B\u540C\u65F6\uFF0C\u4F60\u4E0D\u80FD\u5728\u4E70\u5165\u524D\u5356\u51FA\u80A1\u7968\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aprices = [7,6,4,3,1]
\u8F93\u51FA\uFF1A0
\u89E3\u91CA\uFF1A\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>1 &lt;= prices.length &lt;= 10 ^ 5 0 &lt;= prices[i] &lt;= 10 ^ 4</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><ul><li>\u5982\u679C\u5F53\u524D\u6570\u7EC4\u4E3A\u7A7A\uFF0C\u76F4\u63A5\u8FD4\u56DE <code>0</code></li><li>\u521D\u59CB\u5316\u6700\u5C0F\u503C <code>min = 0</code> \u7528\u4E8E\u5B58\u50A8\u6700\u4F4E\u7684\u80A1\u4EF7</li><li>\u521D\u59CB\u5316\u6700\u5927\u6536\u76CA <code>max = prices[0]</code> \u7528\u4E8E\u4FDD\u5B58\u6700\u5927\u6536\u76CA\u4EF7\u683C</li><li>\u904D\u5386\u6570\u7EC4\uFF0C\u5982\u679C\u5F53\u524D\u9879\u5C0F\u4E8E <code>min</code>\uFF0C\u5219\u7528\u5F53\u524D\u9879\u66FF\u6362 <code>min</code> \u7684\u503C\uFF0C\u7528\u5F53\u524D\u9879\u51CF\u53BB <code>min</code> \u7684\u7ED3\u679C\u4E0E <code>max</code> \u6BD4\u8F83\uFF0C\u5C06\u5927\u7684\u503C\u5B58\u4E0B\u6765</li><li>\u8FD4\u56DE <code>max</code> \u5373\u53EF</li></ul></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A
 * @param {number[]} prices
 * @return {number}
 */
export default function(prices: number[]): number {
  // \u5982\u679C\u662F\u7A7A\u6570\u7EC4\uFF0C\u8FD4\u56DE0
  if (prices.length &lt; 1) return 0
  let max = 0
  let min = prices[0]
  for (let i = 1; i &lt; prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }
  return max
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,11);function r(i,l){return s}var p=n(a,[["render",r]]);export{p as default};
