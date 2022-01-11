/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 删除链表的倒数第N个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export default function(head: any, n: number): any {
  let len = 0
  let currentHead = head
  while(currentHead) {
    len += 1
    currentHead = currentHead.next
  }
  // 如果len === n,说明删除的是的头节点
  if (len === n) return head.next
  // 否则找到要删除节点的上一个节点, 将指针指向删除节点的下一个节点
  let pre = head
  for (let i = 0; i < len - n - 1; i++) {
    pre = pre.next
  }
  pre.next = pre.next.next
  return head
}
