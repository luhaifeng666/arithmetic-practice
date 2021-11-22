/**
 * 两数之和
 * 给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

/**
 * 暴力解法，双层循环的方式求解
 * @param nums
 * @param target
 */
export function getSum (nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > target) continue
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
    return []
}

/**
 * 通过哈希表的方式求解
 * @param nums
 * @param target
 */
export function getSumByHash (nums: number[], target: number): number[] {
    const hashMap = new Map()
    nums.forEach((num, index) => {
        hashMap.set(num, index)
    })
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (hashMap.has(diff) && i !== hashMap.get(diff)) {
            return [i, hashMap.get(diff)]
        }
    }
    return []
}
