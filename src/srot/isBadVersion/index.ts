/**
 * 第一个错误的版本
 */

/**
 * @param {number} targetVersion
 * @return {function}
 */
export default function(targetVersion: number): Function {
  const isBadVersion = function(version: number): boolean {
    return version >= targetVersion
  }
  return function (n: number): number {
    // 判断是否是错误版本
    let start = 0, end = n
    while( start < end ) {
      let checkVersion = Math.floor(start + (end - start) / 2)
      if (isBadVersion(checkVersion)) {
        end = checkVersion
      } else { start = checkVersion + 1 }
    }
    return start
  }
}
