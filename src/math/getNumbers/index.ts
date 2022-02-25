/**
 * 复数乘法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function getNumbers (num) {
  const list = num.split('+')
  if (list.length < 2) {
    list.push(0)
  }
  return list
}

export default function(num1: string, num2: string): string {
  const nums1 = getNumbers(num1)
  const nums2 = getNumbers(num2)
  let real = 0
  let virtual = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let n = 0; n < nums2.length; n++) {
      const isNumber1 = !isNaN(nums1[i])
      const isNumber2 = !isNaN(nums2[n])
      // 都是数字
      if (isNumber1 && isNumber2) {
        real += nums1[i] * nums2[n]
      }
      // 其中一个是虚数
      if ((!isNumber1 && isNumber2) || (isNumber1 && !isNumber2)) {
        virtual += (nums1[i].split('i')[0] || 1) * (nums2[n].split('i')[0] || 1)
      }
      // 都是虚数
      if (!isNumber1 && !isNumber2) {
        real += (nums1[i].split('i')[0] || 1) * (nums2[n].split('i')[0] || 1) * -1
      }
    }
  }
  return `${real}+${virtual}i`
};
