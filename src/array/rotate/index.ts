/**
 * 旋转数组
 * 给你一个数组，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。
 */

// 取出需要翻转的数字，插入数组头部
function rotate (nums: number[], k: number): void {
  // 空数组，或者nums.length可以被k整除，则返回原数组
  const times = k % nums.length
  // 将需要旋转的数字整体取出，插入到数组开头
  nums.unshift(...nums.splice(nums.length - times, times))
}

// 通过整体翻转再局部翻转的方式旋转
function rotateByReverse (nums: number[], k: number):void {
  const times = k % nums.length
  // 通过翻转数组的方式，先整体翻转，再翻转需要旋转的数字以及不需要旋转的数字
  reverse(nums, 0, nums.length)
  reverse(nums, 0, times)
  reverse(nums, times, nums.length)
}

const reverse = function (nums: number[], start: number, end: number): void {
    for (let i = start; i < end - 1; i++) {
        if (i < end - 1 - i + start) {
            [nums[i], nums[end - 1 - i + start]] = [nums[end - 1 - i + start], nums[i]]
            continue
        }
        break
    }
}

// 通过临时数组存储的方式旋转
function rotateByTemp (nums: number[], k: number):void {
  const times = k % nums.length
  const tempNums = [...nums]
  for (let i = 0; i < times; i++) {
    nums[i] = tempNums[tempNums.length - times + i]
  }
  for (let i = 0; i < nums.length - times; i++) {
    nums[i + times] = tempNums[i]
  }
}

export { rotate, rotateByReverse, rotateByTemp }
