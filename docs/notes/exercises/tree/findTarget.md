# 两数之和 IV - 输入 BST
## 题目

给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

 

#### 示例 1：
```
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
```

#### 示例 2：
```
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
```

::: tip 提示:
- 二叉树的节点个数的范围是  [1, 104].
- -104 <= Node.val <= 104
- root 为二叉搜索树
- -105 <= k <= 105
:::

## 题解
::: tip 解题思路
- 先将树转成数组
- 然后算 `两数之和`
:::

```ts
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
export default function(root: Root, k): boolean {
  const nums: number[] = []
  function getNums (root: Root) {
    nums.push(root.val)
    if (root.left) getNums(root.left)
    if (root.right) getNums(root.right)
  }
  getNums(root)

  const map = new Map()
  nums.forEach((num, index) => {
    map.set(num, index)
  })

  return nums.some((num, index) => {
    const diff = k - num
    return map.has(diff) && map.get(diff) !== index
  })
}
```
