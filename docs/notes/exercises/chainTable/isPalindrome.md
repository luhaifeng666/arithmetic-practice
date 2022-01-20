# 回文链表
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

#### 示例 1：
```
输入：head = [1,2,2,1]
输出：true
```

#### 示例 2：
```
输入：head = [1,2]
输出：false
```

::: tip 提示：
链表中节点数目在范围 `[1, 105]` 内
0 <= Node.val <= 9
:::

## 题解
::: tip 解题思路
遍历链表，将链表的值存储到数组中，判断是否是回文数组即可。
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
```
