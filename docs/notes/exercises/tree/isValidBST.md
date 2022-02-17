# 验证二叉搜索树

给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。<br>
有效 二叉搜索树定义如下：
> 节点的左子树只包含 小于 当前节点的数。
> 节点的右子树只包含 大于 当前节点的数。
> 所有左子树和右子树自身必须也是二叉搜索树。

#### 示例 1：
```
输入：root = [2,1,3]
输出：true
```

#### 示例 2：
```
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

::: tip 提示：
树中节点数目范围在[1, 104] 内
-231 <= Node.val <= 231 - 1
:::

## 题解
```ts
/**
 * @param {TreeNode} root
 * @param min
 * @param max
 * @return {boolean}
 */

function isValidate(root, min, max) {
  if (root === null) return true
  if (root.val <= min || root.val >= max) return false
  return isValidate(root.left, min, root.val) && isValidate(root.right, root.val, max)
}

export default function (root) {
  return isValidate(root, -Infinity, Infinity)
}
```
