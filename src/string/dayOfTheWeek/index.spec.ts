import dayOfTheWeek from './index'

const TEST_CASES = [
  { day: 31, month: 8, year: 2019, res: 'Saturday' },
  { day: 18, month: 7, year: 1999, res: 'Sunday' },
  { day: 15, month: 8, year: 1993, res: 'Sunday' },
]

interface Case {
  day: number
  month: number
  year: number
  res: string
}

it('dayOfTheWeek', () => {
  TEST_CASES.forEach((item: Case) => {
    const { day, month, year, res } = item
    expect(dayOfTheWeek(day, month, year)).toEqual(res)
  })
})
