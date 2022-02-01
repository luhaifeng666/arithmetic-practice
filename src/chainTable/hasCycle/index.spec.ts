import { hasCycle, hasCycleByList, hasCycleByDeleteNode } from './index'

function ListNode(this: any, val) {
  this.val = val;
  this.next = null;
}

function handleTest (fn) {
  return () => {
    let head: any = null
    expect(fn(head)).toBe(false)
    head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = new ListNode(3)
    head.next.next.next = head
    expect(fn(head)).toBe(true)
  }
}

it('hasCycle', handleTest(hasCycle))
it('hasCycleByList', handleTest(hasCycleByList))
it('hasCycleByDeleteNode', handleTest(hasCycleByDeleteNode))
