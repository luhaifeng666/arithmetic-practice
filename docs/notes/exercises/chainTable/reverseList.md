# 反转链表
## 题目
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

#### 示例 1：
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

#### 示例 2：
```
输入：head = [1,2]
输出：[2,1]
```

#### 示例 3：
```
输入：head = []
输出：[]
```

::: tip 提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000=
:::

## 题解
::: tip 解题思路
利用 `栈` 先进后出的思想。
- 将链表压栈
- 如果栈为空，返回 `null`
- 遍历栈，每次取出栈顶元素，拼接成新链表返回即可
:::

::: warning 注意
栈中存的是翻转前的第一个节点，最后需要将它的 `next` 设置为 `null`，避免形成 `环`。
:::

```ts
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
```
