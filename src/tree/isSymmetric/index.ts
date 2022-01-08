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
