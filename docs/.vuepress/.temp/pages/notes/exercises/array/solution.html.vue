<template><h1 id="打乱数组" tabindex="-1"><a class="header-anchor" href="#打乱数组" aria-hidden="true">#</a> 打乱数组</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。<br>
实现 Solution class:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示：</p>
<p>1 &lt;= nums.length &lt;= 200
-10 ^ 6 &lt;= nums[i] &lt;= 10 ^ 6
nums 中的所有元素都是 唯一的
最多可以调用 5 * 10 ^ 4 次 <code>reset</code> 和 <code>shuffle</code></p>
</div>
<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2>
<div class="custom-container tip"><p class="custom-container-title">解题思路</p>
<ul>
<li><code>rest</code> 就是将初始化时保存的数组返回出去，所以打乱数组时不可以改变原数组，需要拷贝一份出来操作</li>
<li><code>shuffle</code> 使用 <code>交换数组中的两个数</code> 的思想去做。先拷贝一份数组，然后遍历，将当前的值与剩下值中的随机一个值进行交换即可。</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 打乱数组
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> nums
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">Solution</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token keyword">typeof</span> Solution<span class="token punctuation">,</span> nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> nums
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
Solution<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
Solution<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">shuffle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里也可以用结构或者slice的方式实现拷贝，但是JSON的方式内存消耗更小</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在剩下的数里面随机挑一个</span>
    <span class="token keyword">const</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span>
    res<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span> <span class="token operator">=</span> mid
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></template>
