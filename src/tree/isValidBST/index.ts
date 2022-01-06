/**
 * 验证二叉搜索树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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
