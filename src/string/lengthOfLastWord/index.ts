/**
 * @param {string} s
 * @return {number}
 */
export default function(s: string): number {
  return s.trim().split(' ').slice(-1)[0].length
}
