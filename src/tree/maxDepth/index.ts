/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function(root: any): number {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

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
