# 对称二叉树

## 题目

给定一个二叉树，检查它是否是镜像对称的。<br>
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
    


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
  \   \
   3   3

## 题解
::: tip 解题思路
- 如果当前树是 `null`，直接返回 `true`
- 如果左右子节点都是 `null`，返回 `true`
- 将左节点的左值与右节点的右值进行比较，将左节点的右值与右节点的左值进行比较，如果不相等则返回 `false`
- 递归执行这个过程，直到结束
:::

```ts
/**
 * 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
export default function(root) {
  if (root === null) return true
  const validate = (l, r) => {
    if (l === null && r === null) return true
    if (l === null || r === null || l.val !== r.val) return false
    return validate(l.left, r.right) && validate(l.right, r.left)
  }
  return validate(root.left, root.right)
};
```
