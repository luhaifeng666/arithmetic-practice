/**
 * 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
export default function(board: string[][]): boolean {
  const lineNumber: boolean[][] = [[],[],[],[],[],[],[],[],[]]
  const colNumber: boolean[][] = [[],[],[],[],[],[],[],[],[]]
  const blockNumber: boolean[][] = [[],[],[],[],[],[],[],[],[]]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue
      // 计算是第几个九宫格
      const n = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      // 当前格子的数字
      const number = Number(board[i][j])
      if (lineNumber[i][number] || colNumber[j][number] || blockNumber[n][number]) return false
      lineNumber[i][number] = colNumber[j][number] = blockNumber[n][number] = true
    }
  }
  return true
}
