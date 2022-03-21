import findTarget from './index'

const TEST_CASES = [
  { root: {
    val: 5,
      left: {
        val: 3,
        left: {
          val: 2, left: null, right: null
        },
        right: {
          val: 4, left: null, right: null
        }
      },
      right: {
        val: 6,
        left: null,
        right: {
          val: 7, left: null, right: null
        }
      }
    },
    target: 9
  }
]

interface Case {
  root: any,
  target: number
}

it('findTarget', () => {
  TEST_CASES.forEach(({ root, target }: Case) => {
    expect(findTarget(root, target)).toBeTruthy()
  })
})
