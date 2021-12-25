# 打乱数组

## 题目

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。<br>
实现 Solution class:
```
Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果
```

#### 示例：
```
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

::: tip 提示：
1 <= nums.length <= 200
-10 ^ 6 <= nums[i] <= 10 ^ 6
nums 中的所有元素都是 唯一的
最多可以调用 5 * 10 ^ 4 次 `reset` 和 `shuffle`
:::

## 题解
::: tip 解题思路
- `rest` 就是将初始化时保存的数组返回出去，所以打乱数组时不可以改变原数组，需要拷贝一份出来操作
- `shuffle` 使用 `交换数组中的两个数` 的思想去做。先拷贝一份数组，然后遍历，将当前的值与剩下值中的随机一个值进行交换即可。
:::

```ts
/**
 * 打乱数组
 * @param {number[]} nums
 */
const Solution = function(this: typeof Solution, nums: number[]) {
  this.nums = nums
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // 这里也可以用结构或者slice的方式实现拷贝，但是JSON的方式内存消耗更小
  let res = JSON.parse(JSON.stringify(this.nums))
  for (let i = 1; i < res.length; i++) {
    // 在剩下的数里面随机挑一个
    const randomIndex = Math.floor(Math.random() * (i + 1))
    let mid = res[i]
    res[i] = res[randomIndex]
    res[randomIndex] = mid
  }
  return res
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```
