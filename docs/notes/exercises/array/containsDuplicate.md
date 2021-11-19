# 存在重复元素

## 题目
给定一个整数数组，判断是否存在重复元素。<br>
如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。


#### 示例 1:
```
输入: [1,2,3,1]
输出: true
```

#### 示例 2:
```
输入: [1,2,3,4]
输出: false
```

示例3:
```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

## 解法一
::: tip 解题思路
这种方式有点取巧，是通过 `new Set` 的方式先对数组去重，然后判断去重后的数组长度与原数组的长度是否相等。<br>
若相等则存在重复值，否则不存在重复值。
:::

```ts
/**
 * 通过new Set的方式判断
 * @param nums
 */
function testContainsDuplicateBySet (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 利用new Set去重
  return Array.from(new Set(nums)).length !== nums.length
}
```

## 解法二
::: tip 解题思路
利用 `new Map` 的 `key` 不能重复的特性，创建哈希表，创建完成后，判断所有key的数量与原数组是否相等。<br>
若相等则存在重复值，否则不存在重复值。
:::

```ts
/**
 * 通过new Map的方式判断
 * @param nums
 */
function testContainsDuplicateByMap (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 利用map的key不可以重复的特性判断是否重复
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i)
  }
  return Array.from(map.keys()).length !== nums.length
}
```

## 解法三
::: tip 解题思路
这种方式是遍历数组，将元素值缓存起来，且在遍历的过程中查询缓存的数组中是否存在当前遍历的元素。<br>
若存在则返回 `true`。如果可以遍历完，则说明不存在重复元素，返回 `false`。<br>
:::

::: warning 注意
这种方式性能较差, 执行时间较长。
:::

```ts
/**
 * 通过遍历搜索的方式判断
 * @param nums
 */
function testContainsDuplicate (nums: number[]): boolean {
  // 如果数组长度小于2，则不可能出现重复，返回false即可
  if (nums.length < 2) return false
  // 申请额外数组空间，循环判断，存在则返回true, 性能太差。。。
  const arr: number[] = []
  for (const num of nums) {
    if (arr.includes(num)) {
      return true
    } else {
      arr.push(num)
    }
  }
  return false
}
```
