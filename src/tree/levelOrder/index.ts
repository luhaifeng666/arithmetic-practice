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
