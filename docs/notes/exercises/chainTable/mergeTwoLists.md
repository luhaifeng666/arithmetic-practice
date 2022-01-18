# 合并两个有序链表

## 题目
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

#### 示例 1：
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

#### 示例 2：
```
输入：l1 = [], l2 = []
输出：[]
```

#### 示例 3：
```
输入：l1 = [], l2 = [0]
输出：[0]
```

::: warning 提示：
两个链表的节点数目范围是 `[0, 50]`
-100 <= Node.val <= 100
`l1` 和 `l2` 均按 `非递减顺序` 排列
:::

## 题解
::: tip 解题思路
- 新建一个空的链表
- 由于是有序列表，比对链表最开始的节点，将小的添加到新链表上，循环这个过程
- 循环结束后，如果有链表没有被遍历完，则将其剩下的部分直接挂载到新链表尾部即可
- 注意，最后要返回的是 **新链表的next**，因为新链表在创建时是从0开始的，所以要从下一个节点开始返回
:::

```ts
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
}
```
