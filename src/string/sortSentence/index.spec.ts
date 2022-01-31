import sortSentence from './index'

const TEST_CASE = [
  { target: '', res: '' },
  { target: 'is2 sentence4 This1 a3', res: 'This is a sentence' },
  { target: 'Myself2 Me1 I4 and3', res: 'Me Myself and I' },
]

interface Case {
  target: string
  res: string
}

it('sortSentence', () => {
  TEST_CASE.forEach((item: Case) => {
    const { target, res } = item
    expect(sortSentence(target)).toEqual(res)
  })
})
