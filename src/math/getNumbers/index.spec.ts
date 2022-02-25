import getNumbers from './index'

const TEST_CASES = [
  { num1: "1+1i", num2: "1+1i", res: "0+2i" },
  { num1: "1+-1i", num2: "1+-1i", res: "0+-2i" },
]

interface Case {
  num1: string
  num2: string
  res: string
}

it('getNumbers', () => {
  TEST_CASES.forEach(({ num1, num2, res }: Case) => {
    expect(getNumbers(num1, num2)).toEqual(res)
  })
})
