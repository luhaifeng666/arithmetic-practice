interface ListNodeType {
  val: number
  next: ListNodeType | null
}

// Definition for singly-linked list.
function ListNode(this: ListNodeType, val = 0, next = null) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export default function(list1, list2) {
  if (list1 === null || list2 === null) return list1 || list2
  let newList = new ListNode()
  let curr = newList
  while(list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2
      list2 = list2.next
    } else {
      curr.next = list1
      list1 = list1.next
    }
    curr = curr.next
  }
  curr.next = list1 || list2
  // newList从0开始，第一个节点是下一个节点，所以要返回next
  return newList.next
};
