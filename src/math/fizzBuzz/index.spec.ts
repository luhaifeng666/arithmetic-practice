import fuzzBuzz from './index'

const TEST_CASES = [
  {
    target: 3,
    res: ["1","2","Fizz"]
  }, {
    target: 5,
    res: ["1","2","Fizz","4","Buzz"]
  }, {
    target: 15,
    res: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
  }
]

interface Case {
  target: number
  res: string[]
}

it('fuzzBuzz', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    expect(fuzzBuzz(target)).toEqual(res)
  })
})
