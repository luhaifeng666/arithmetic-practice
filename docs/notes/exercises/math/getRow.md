#  杨辉三角 II

## 题目
给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。<br>
在「杨辉三角」中，每个数是它左上方和右上方的数的和。

#### 示例 1:
```
输入: rowIndex = 3
输出: [1,3,3,1]
```

#### 示例 2:
```
输入: rowIndex = 0
输出: [1]
```

#### 示例 3:
```
输入: rowIndex = 1
输出: [1,1]
```

::: tip 提示:
0 <= rowIndex <= 33
:::

## 题解
::: tip 解题思路
先求出杨辉三角数组，之后返回数组最后一项即可。
:::

```ts
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
```
