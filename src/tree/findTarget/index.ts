/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
interface Root {
  val: number
  left: Root
  right: Root
}
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
