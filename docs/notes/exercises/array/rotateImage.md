# 旋转图像
## 题目
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。<br>
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

#### 示例 1：
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

#### 示例 2：
```
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

::: tip 提示：
n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
:::

## 题解
::: tip 解题思路
先上下翻转，再沿着对角线翻转即可。
:::

```ts
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
```
