/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(this:any, val, left?, right?) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const sortedArrayToBST = function(nums: number[]) {
  if (!nums.length) return null
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid])
  root.left = nums.length > 1 ? sortedArrayToBST(nums.slice(0, mid)) : null
  root.right = nums.length > 2 ? sortedArrayToBST(nums.slice(mid + 1)) : null
  return root
};
