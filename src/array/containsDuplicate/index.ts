/**
 * 存在重复元素
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */

/**
 * 通过new Set的方式判断
 * @param nums
 */
function testContainsDuplicateBySet (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 利用new Set去重
  return Array.from(new Set(nums)).length !== nums.length
}

/**
 * 通过new Map的方式判断
 * @param nums
 */
function testContainsDuplicateByMap (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 利用map的key不可以重复的特性判断是否重复
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i)
  }
  return Array.from(map.keys()).length !== nums.length
}

/**
 * 通过遍历搜索的方式判断
 * @param nums
 */
function testContainsDuplicate (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 申请额外数组空间，循环判断，存在则返回true, 性能太差。。。
  const arr: number[] = []
  for (const num of nums) {
    if (arr.includes(num)) {
      return true
    } else {
      arr.push(num)
    }
  }
  return false
}

export {
  testContainsDuplicateBySet,
  testContainsDuplicateByMap,
  testContainsDuplicate
}
