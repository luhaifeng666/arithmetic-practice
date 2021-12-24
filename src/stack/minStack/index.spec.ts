import MinStack from './index'

it('min stack', () => {
  const minStack = new MinStack()
  // 此时存在空栈
  expect(minStack.stack).toEqual([])
  // 压栈
  minStack.push(1)
  minStack.push(0)
  minStack.push(-1)
  // 取出栈顶的值
  const stackTop = minStack.pop()
  expect(stackTop).toBe(-1)
  // 此时栈顶的值为0
  expect(minStack.top()).toBe(0)
  // 此时最小栈值为0
  expect(minStack.getMin()).toBe(0)
})
