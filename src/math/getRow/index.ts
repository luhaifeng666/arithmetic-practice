/**
 * 杨辉三角 II
 * @param {number} rowIndex
 * @return {number[]}
 */
export default function(rowIndex: number): number[] {
  const nums: number[][] = []
  for (let i = 0; i < rowIndex + 1; i++) {
    // 第一个是[1]
    if (!nums[i - 1]) {
      nums.push([1])
    } else if (nums[i - 1].length < 2) {
      // 第二个是[1, 1]
      nums.push([1, 1])
    } else {
      // 剩下的计算
      const arr = [1, 1]
      for (let n = 0; n < nums[i - 1].length - 1; n++) {
        arr.splice(n + 1, 0, nums[i - 1][n] + nums[i - 1][n + 1])
      }
      nums.push(arr)
    }
  }
  return nums[rowIndex]
}
