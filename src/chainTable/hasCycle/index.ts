/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
export const hasCycle = function(head) {
    if (head === null || head.next === null) return false
    let low = head.next
    let fast = head.next.next
    while(fast !== null && fast.next !== null) {
      if (low === fast) return true
      low = low.next
      fast = fast.next.next
    }
    return false
}

// 存放集合
export const hasCycleByList = function(head) {
  const list: any = []
  let node = head
  while(node !== null && node.next !== null) {
    if (list.includes(node)) return true
    list.push(node)
    node = node.next
  }
  return false
}

// 删除节点
export const hasCycleByDeleteNode = function(head) {
  if (head === null || head.next === null) return false
  if (head === head.next) return true
  const node = head.next
  head.next = head
  return hasCycle(node)
}
