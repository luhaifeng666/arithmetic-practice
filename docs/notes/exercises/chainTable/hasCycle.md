# 环形链表

## 题目
给你一个链表的头节点 head ，判断链表中是否有环。<br>
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。<br>
如果链表中存在环 ，则返回 true 。 否则，返回 false 。

#### 示例 1：
```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

#### 示例 2：
```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

#### 示例 3：
```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

::: tip 提示：
链表中节点的数目范围是 [0, 10 ^ 4]
-10 ^ 5 <= Node.val <= 10 ^ 5
pos 为 -1 或者链表中的一个 `有效索引` 。
:::

## 题解
### 解法一
::: tip 解题思路
利用 `快慢指针` 的思想。设定一个慢指针，每次走一步，设定一个快指针，每次走两步，如果有环的话，快慢指针一定会相遇。如果快指针指到了 `null`， 说明没有环。
:::

```ts
/**
 * 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
export const hasCycle = function(head) {
    if (head === null || head.next === null) return false
    let low = head.next
    let fast = head.next.next
    while(fast !== null && fast.next !== null) {
      if (low === fast) return true
      low = low.next
      fast = fast.next.next
    }
    return false
}
```

### 解法二
::: tip 解题思路
将指针存放到集合中，如果存在重复，说明有环，否则说明没有环。
:::

```ts
// 存放集合
export const hasCycleByList = function(head) {
  const list: any = []
  let node = head
  while(node !== null && node.next !== null) {
    if (list.includes(node)) return true
    list.push(node)
    node = node.next
  }
  return false
}
```

### 解法三
::: tip 解题思路
`删除节点`，就是将节点指向自己。如果有环，最后一定有：`head === head.next`, 否则就是没有环。
:::

```ts
// 删除节点
export const hasCycleByDeleteNode = function(head) {
  if (head === null || head.next === null) return false
  if (head === head.next) return true
  const node = head.next
  head.next = head
  return hasCycle(node)
}
```
