/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export default function(head) {
  let now = head
  while(now && now.next) {
    if (now.val === now.next.val) {
      now.next = now.next.next
    } else {
      now = now.next
    }
  }
  return head
}
