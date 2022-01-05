import { maxDepth, maxDepthByLevel } from './index'

const TEST_CASES = [
  { input: null, output: 0 },
  { input: { left: null, right: null }, output: 1 },
  { input: { left: { left: { left: null, right: null }, right: null }, right: null }, output: 3 },
  { input: { left: null, right: { left: null, right: { left: null, right: null }}}, output: 3 }
]

interface Tree {
  left: Tree | null
  right: Tree | null
}

interface Case {
  input: Tree | any
  output: number
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { input, output } = item
      expect(fn(input)).toEqual(output)
    })
  }
}

it('maxDepth', testHandle(maxDepth))
it('maxDepthByLevel', testHandle(maxDepthByLevel))
