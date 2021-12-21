/**
 * 二叉树的前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

interface TreeNode {
  val: never
  left: TreeNode
  right: TreeNode
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = function(root: TreeNode): number[] {
  const getRes = (_root?: TreeNode, res = []) => {
    // 如果存在根节点，继续向下查找，否则直接返回
    if (_root && Object.keys(_root).length) {
      // 将根节点插入数组
      res.push(_root.val)
      // 如果存在左子节点，继续遍历
      if (_root.left) {
        getRes(_root.left, res)
      }
      // 如果存在右子节点，继续遍历
      if (_root.right) {
        getRes(_root.right, res)
      }
    }
    return res
  }

  return getRes(root)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversalByTrack = function(root: TreeNode): number[] {
  const getRes = (_root?: TreeNode, res = []) => {
    // 定义栈
    const stack: TreeNode[] = []
    // 如果节点存在，继续，否则返回
    if (_root && Object.keys(_root).length) {
      // 将根结点的值保存
      res.push(_root.val)
      // 将右树压栈
      if (_root.right) stack.push(_root.right)
      // 将左树压栈
      if (_root.left) stack.push(_root.left)
      // 如果栈内有值，取出递归
      while(stack.length) {
        getRes(stack.pop(), res)
      }
    }
    return res
  }
  return getRes(root)
}
