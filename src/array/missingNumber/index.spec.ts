import { missingNumberBySort, missingNumber, missingNumberBySum } from './index'

const TEST_CASES = [
  { input: [3,0,1], output: 2 },
  { input: [0,1], output: 2 },
  { input: [9,6,4,2,3,5,7,0,1], output: 8 },
  { input: [0], output: 1 },
]

interface Case {
  input: number[]
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

it('missingNumberBySort', testHandle(missingNumberBySort))
it('missingNumber', testHandle(missingNumber))
it('missingNumberBySum', testHandle(missingNumberBySum))
