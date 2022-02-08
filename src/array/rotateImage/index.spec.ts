import rotateImage from './index'

const TEST_CASES = [
  { target: [[1,2,3],[4,5,6],[7,8,9]], res: [[7,4,1],[8,5,2],[9,6,3]]},
  { target: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], res: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]}
]

interface Case {
  target: number[][]
  res: number[][]
}

it('rotateImage', () => {
  TEST_CASES.forEach((item: Case) => {
    const { target, res } = item
    rotateImage(target)
    expect(target).toEqual(res)
  })
})
