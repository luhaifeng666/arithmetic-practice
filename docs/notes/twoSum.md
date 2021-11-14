# 两数之和

## 题目
给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。


## 解法一
::: tip 解题思路
利用双重遍历，第一重遍历从首个元素开始，第二重遍历从第二个元素开始，以此类推，类似于双指针的概念。遍历求和，直到找到两数之和等于target的两个值为止，返回它们的下标即可。
:::

```js
/**
 * 暴力解法，双层循环的方式求解
 * @param nums
 * @param target
 */
export function getSum (nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > target) continue
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}
```

## 解法二
::: tip 解题思路
将传入的数组转变成哈希表，`key` 为值，`value` 为索引值，之后遍历数组，取得 `target` 与每一项的差值 `diff`，然后去哈希表中查找是否存在 `key===diff` 的记录，如果存在，则返回两个值的索引即可。
:::

```js
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
```
