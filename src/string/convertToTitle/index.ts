/**
 * @param {number} columnNumber
 * @return {string}
 */
export default function(columnNumber: number): string {
  const list: number[] = []
  while (columnNumber > 0 ) {
    const codeNumber: number = columnNumber % 26
    list.unshift((codeNumber || 26) + 64)
    columnNumber = Math.floor((columnNumber - (codeNumber || 26)) / 26)
  }
  return String.fromCharCode.apply(null, list)
}
