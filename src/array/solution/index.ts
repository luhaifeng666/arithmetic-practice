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

export default Solution
