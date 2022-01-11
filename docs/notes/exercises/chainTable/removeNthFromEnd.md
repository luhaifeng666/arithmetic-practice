# 删除链表的倒数第N个节点

## 题目
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

#### 示例 1：
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

#### 示例 2：
```
输入：head = [1], n = 1
输出：[]
```

#### 示例 3：
```
输入：head = [1,2], n = 1
输出：[1]
```

::: warning 提示：
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
:::

## 题解
::: tip 解题思路
- 先求出链表的长度
- 如果要删除的长度与链表长度一致，说明删除的是头节点，直接返回 `head.next` 即可
- 找到要删除的节点的上一个节点，将该节点的next赋值为要删除节点的下一个节点的next
- 返回head
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
```

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn2925/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
