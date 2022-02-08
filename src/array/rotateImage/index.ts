/**
 * 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export default function (matrix: number[][]): void {
  const length = matrix.length
  // 先上下交换
  for (let i = 0; i < length / 2; i++) {
    const numbers = matrix[i]
    matrix[i] = matrix[length - 1 - i]
    matrix[length - 1 - i] = numbers
  }
  // 对角线交换
  for (let i = 0; i < length; i++) {
    for (let n = i + 1; n < length; n++) {
      const number = matrix[i][n]
      matrix[i][n] = matrix[n][i]
      matrix[n][i] = number
    }
  }
}
