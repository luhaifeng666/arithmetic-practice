# 二叉树的层序遍历

## 题目
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

#### 示例：
```
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
```
返回其层序遍历结果：
```
[
[3],
[9,20],
[15,7]
]
```

## 题解
::: tip 解题思路
- 如果当前节点不是空，则将当前节点存到 `nodes` 中，否则直接返回 `[]`
- 调用 `getRes` 方法，遍历已经存起来的节点，并取出节点的左右值，同时将非空的左右节点存到 `nodes` 中
- 遍历完成后，将 `nodes` 当前的长度与之前的长度进行比较，如果比之前的长度长，说明有新的节点加入，则移除先前存储的节点
- 继续遍历，直到没有新的节点被推入为止，返回结果
:::

```ts
/**
 * 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
export default function(root) {
  const res: Array<Array<number>> = []
  if (root !== null) {
    let nodes = [root]
    const getRes = () => {
      const length = nodes.length
      if (nodes.length) {
        const values = nodes.map(node => {
          if (node.left) nodes.push(node.left)
          if (node.right) nodes.push(node.right)
          return node.val
        })
        res.push(values)
        if (nodes.length > length) {
          nodes.splice(0, length)
          getRes()
        }
      }
    }
    getRes()
  }
  return res
}
```
