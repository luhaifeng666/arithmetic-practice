import{e as n}from"./app.7a2ce060.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/arithmetic-practice/assets/mat1.d906842c.jpeg",p="/arithmetic-practice/assets/mat2.0339cf8f.jpeg";const t={},e=n('<h1 id="\u65CB\u8F6C\u56FE\u50CF" tabindex="-1"><a class="header-anchor" href="#\u65CB\u8F6C\u56FE\u50CF" aria-hidden="true">#</a> \u65CB\u8F6C\u56FE\u50CF</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u5B9A\u4E00\u4E2A n\xA0\xD7\xA0n \u7684\u4E8C\u7EF4\u77E9\u9635\xA0matrix \u8868\u793A\u4E00\u4E2A\u56FE\u50CF\u3002\u8BF7\u4F60\u5C06\u56FE\u50CF\u987A\u65F6\u9488\u65CB\u8F6C 90 \u5EA6\u3002<br> \u4F60\u5FC5\u987B\u5728 \u539F\u5730 \u65CB\u8F6C\u56FE\u50CF\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u9700\u8981\u76F4\u63A5\u4FEE\u6539\u8F93\u5165\u7684\u4E8C\u7EF4\u77E9\u9635\u3002\u8BF7\u4E0D\u8981 \u4F7F\u7528\u53E6\u4E00\u4E2A\u77E9\u9635\u6765\u65CB\u8F6C\u56FE\u50CF\u3002</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B 1\uFF1A</h4><p><img src="'+a+`" alt="img_1.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Amatrix = [[1,2,3],[4,5,6],[7,8,9]]
\u8F93\u51FA\uFF1A[[7,4,1],[8,5,2],[9,6,3]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B 2\uFF1A</h4><p><img src="`+p+`" alt="img_2.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Amatrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
\u8F93\u51FA\uFF1A[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A</p><p>n == matrix.length == matrix[i].length 1 &lt;= n &lt;= 20 -1000 &lt;= matrix[i][j] &lt;= 1000</p></div><h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><div class="custom-container tip"><p class="custom-container-title">\u89E3\u9898\u601D\u8DEF</p><p>\u5148\u4E0A\u4E0B\u7FFB\u8F6C\uFF0C\u518D\u6CBF\u7740\u5BF9\u89D2\u7EBF\u7FFB\u8F6C\u5373\u53EF\u3002</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u65CB\u8F6C\u56FE\u50CF
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[][]<span class="token punctuation">}</span> matrix
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>void<span class="token punctuation">}</span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>matrix<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
  <span class="token comment">// \u5148\u4E0A\u4E0B\u4EA4\u6362</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> numbers <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span>
    matrix<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> numbers
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5BF9\u89D2\u7EBF\u4EA4\u6362</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> n <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> n<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token builtin">number</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span>
      matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      matrix<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,13);function o(c,r){return e}var u=s(t,[["render",o]]);export{u as default};
