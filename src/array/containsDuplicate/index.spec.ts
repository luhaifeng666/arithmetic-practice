import {
  testContainsDuplicateBySet,
  testContainsDuplicateByMap,
  testContainsDuplicate
} from './index'

const TEST_CASES = [
  {
    arr: [1,2,3,1],
    res: true
  }, {
    arr: [1,2,3,4],
    res: false
  }, {
    arr: [1,1,1,3,3,4,3,2,4,2],
    res: true
  }, {
    arr: [],
    res: false
  }, {
    arr: [1],
    res: false
  }
]

interface Case {
  arr: number[]
  res: boolean
}

function testCase (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { arr, res } = item
      expect(fn(arr)).toBe(res)
    })
  }
}

it('Test contain duplicate by set', testCase(testContainsDuplicateBySet))

it('Test contain duplicate by map', testCase(testContainsDuplicateByMap))

it('Test contain duplicate', testCase(testContainsDuplicate))
