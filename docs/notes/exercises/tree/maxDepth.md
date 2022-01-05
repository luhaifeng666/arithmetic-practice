# 二叉树的最大深度

## 题目
给定一个二叉树，找出其最大深度。<br>
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。<br>
说明: 叶子节点是指没有子节点的节点。

#### 示例：
```
给定二叉树 [3,9,20,null,null,15,7]，
  3
 / \
9  20
  /  \
 15   7
返回它的最大深度 3 。
```
 
## 解法一
::: tip 解题思路
利用 `递归` 的思想，逐个节点遍历，如果节点是 `null`，返回0，如果节点不是 `null`，返回左右子节点最大层数 + 1，+1是因为要算上根节点。
:::

```ts
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function(root: any): number {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

## 解法二
::: tip 解题思路
利用 `层序遍历` 的思想，逐层遍历，只要这一层有节点，就+1，否则结束。
:::

```ts
export const maxDepthByLevel = function(root: any): number {
  let count = 0
  if (root !== null) {
    let rootList = [root]
    const getNodes = (rootList: any[]): void => {
      if (rootList.length) {
        count += 1
        const roots: any[] = []
        rootList.forEach((root): void => {
          if (root.left !== null) roots.push(root.left)
          if (root.right !== null) roots.push(root.right)
        })
        rootList = roots
        getNodes(rootList)
      }
    }
    getNodes(rootList)
  }
  return count
}
```
