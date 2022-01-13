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
export default function(head: any): any {
  // 栈，存节点
  const stack: any[] = []
  // 将节点入栈
  let preNode: any = head
  while(preNode) {
    stack.push(preNode)
    preNode = preNode.next || null
  }
  // 如果栈内是空，说明链表是空，返回null
  if (!stack.length) return null
  // 拼接节点，形成新栈
  let pre = stack.pop()
  let newHead = pre
  while(stack.length) {
    pre.next = stack.pop()
    pre = pre.next
  }
  // 最后一个节点存的是原始头结点，需要将其next置成空，否则会变成环
  pre.next = null
  return newHead
}
