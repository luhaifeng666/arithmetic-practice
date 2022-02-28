# 删除排序链表中的重复元素
## 题目
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

 

#### 示例 1：
```
输入：head = [1,1,2]
输出：[1,2]
```

#### 示例 2：
```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

::: tip 提示：
链表中节点数目在范围 `[0, 300]` 内
-100 <= Node.val <= 100
题目数据保证链表已经按 `升序` 排列
:::

## 题解
::: tip 解题思路
遍历链表，如果下个节点的值与当前节点相同，则将当前节点的 next 指向 next.next即可。
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
```
