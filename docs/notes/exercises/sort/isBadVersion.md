# 第一个错误的版本

## 题目

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。<br>
假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。<br>
你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 `version` 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

#### 示例 1：
```
输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
```

#### 示例 2：
```
输入：n = 1, bad = 1
输出：1
```

::: tip 提示：
1 <= bad <= n <= 2 ^ 31 - 1
:::

## 题解
::: tip 解题思路
利用 `二分法` 查找的方式。每次选取中间版本，与目标版本进行比对。<br>
如果不是有问题的版本，则将 `start` 赋值为 `中间值 + 1`，否则将 `end` 赋值为 `中间值`。<br>
以此类推，直到 `start` 大于 `end` 时终止循环，并返回 `start`
:::
```ts
/**
 * @param {number} targetVersion
 * @return {function}
 */
export default function(targetVersion: number): Function {
  const isBadVersion = function(version: number): boolean {
    return version >= targetVersion
  }
  return function (n: number): number {
    // 判断是否是错误版本
    let start = 0, end = n
    while( start < end ) {
      let checkVersion = Math.floor(start + (end - start) / 2)
      if (isBadVersion(checkVersion)) {
        end = checkVersion
      } else { start = checkVersion + 1 }
    }
    return start
  }
}
```
