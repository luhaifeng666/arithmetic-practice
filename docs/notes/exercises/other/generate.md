# 杨辉三角

## 题目

给定一个非负整数 `numRows`，生成「杨辉三角」的前 `numRows` 行。<br>
![img.png](../../../.vuepress/public/images/generate.gif) <br>
在「杨辉三角」中，每个数是它左上方和右上方的数的和。

#### 示例 1:
```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

#### 示例 2:
```
输入: numRows = 1
输出: [[1]]
```

::: tip 提示:
1 <= numRows <= 30
:::

## 题解
::: tip 解题思路
`杨辉三角` 除第一项外，其他每项的首位都是 `1`， 我们只要将上一项的两数之和插入到 `[1, 1]` 之间即可。<br>
- 如果给定长度是1，直接返回 `[[1]]`
- 如果给定长度是2，直接返回 `[[1], [1, 1]]`
- 遍历前一项，将前后两项相加，插入到 `[1, 1]` 数组的对应位置即可。
:::

```ts
/**
 * @param {number} numRows
 * @return {number[][]}
 */
export default function(numRows: number): Array<Array<number>> {
  const res: Array<Array<number>> = []
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      res.push([1])
    } else if (i === 2) {
      res.push([1, 1])
    } else {
      const arr = [1, 1]
      const preArr = res[res.length - 1]
      for (let j = 0; j < preArr.length - 1; j++) {
        arr.splice(j + 1, 0, preArr[j] + preArr[j + 1])
      }
      res.push(arr)
    }
  }
  return res
}

```
