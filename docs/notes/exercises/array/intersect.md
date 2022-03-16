# 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。

#### 示例 1：
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

#### 示例 2:
```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

#### 说明：

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
- 我们可以不考虑输出结果的顺序。

#### 进阶：
- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果nums1的大小比nums2小很多，哪种方法更优？
- 如果nums2的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

## 题解
::: tip 解题思路
- 生成一个map，遍历其中一个数组，以其中的值为key，以该值出现的次数为value存入到map中。
- 此时遍历另一个数组，将每一个值与map中存储的key进行比较。
- 如果在map中存在，则说明是交集数，则存入数组，并将map中对应key的value-1
:::

```ts
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default function intersect (nums1: number[], nums2: number[]): number[] {
  // 生成map，存储每个值对应的个数
  const map = new Map()
  for(let i = 0; i < nums1.length; i++) {
    let res = map.get(nums1[i])
    map.set(nums1[i], res ? ++res : 1)
  }
  // 遍历长度较小的数组，如果在map中存在，则说明是交集数，则存入数组，并将map中对应值的数量-1
  const result: number[] = []
  for(let i = 0; i < nums2.length; i++) {
    let targetNum = map.get(nums2[i])
    if (targetNum) {
      result.push(nums2[i])
      map.set(nums2[i], --targetNum)
    }
  }
  return result
}
```

