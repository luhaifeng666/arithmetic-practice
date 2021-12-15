/**
 * 杨辉三角
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
export default function(numRows: number): Array<Array<number>> {
  const res: Array<Array<number>> = []
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      res.push([1])
    } else if (i === 2) {
      res.push([1, 1])
    } else {
      const arr = [1, 1]
      const preArr = res[res.length - 1]
      for (let j = 0; j < preArr.length - 1; j++) {
        arr.splice(j + 1, 0, preArr[j] + preArr[j + 1])
      }
      res.push(arr)
    }
  }
  return res
}
