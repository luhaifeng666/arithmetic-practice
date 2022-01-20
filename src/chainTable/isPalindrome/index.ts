/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function(head) {
  // 存链表的值
  const vals: number[] = []
  // 遍历链表，将值存入
  let preNode = head
  while(preNode) {
    vals.push(preNode.val)
    preNode = preNode.next
  }
  // 验证是否回文
  return vals.join('') === vals.reverse().join('')
}
