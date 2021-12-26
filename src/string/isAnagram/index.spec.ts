import {
  isAnagram,
  isAnagramByMap
} from './index'

const TEST_CASES = [
  { s: 'anagram', t: 'nagaram', res: true },
  { s: '', t: 'a', res: false },
  { s: '', t: '', res: true },
  { s: 'rat', t: 'car', res: false },
]

interface Case {
  s: string
  t: string
  res: boolean
}

function testHandle (fn) {
  return () => {
    TEST_CASES.forEach((item: Case) => {
      const { s, t, res } = item
      expect(fn(s, t)).toBe(res)
    })
  }
}

it('isAnagram', testHandle(isAnagram))
it('isAnagramByMap', testHandle(isAnagramByMap))
