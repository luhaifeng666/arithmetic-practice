import reverseString from './index'

const TEST_CASES = [
  { arr: [], target:[] },
  { arr: ["h","e","l","l","o"], target: ["o","l","l","e","h"] },
  { arr: ["H","a","n","n","a","h"], target:["h","a","n","n","a","H"]}
]

interface Case {
  arr: string[]
  target: string[]
}

it('Reverse string', () => {
  TEST_CASES.forEach((item: Case) => {
    const { arr, target } = item
    reverseString(arr)
    expect(arr).toEqual(target)
  })
})
