# 一周中的第几天
## 题目

给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。<br>
输入为三个整数：day、month 和 year，分别表示日、月、年。<br>
您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

#### 示例 1：
```
输入：day = 31, month = 8, year = 2019
输出："Saturday"
```

#### 示例 2：
```
输入：day = 18, month = 7, year = 1999
输出："Sunday"
```

#### 示例 3：
```
输入：day = 15, month = 8, year = 1993
输出："Sunday"
```

::: tip 提示：
给出的日期一定是在 1971 到 2100 年之间的有效日期。
:::

## 题解
::: tip 解题思路
将提供的年月日信息初始化为时间，然后 `getDay` 获取是周几即可。
:::

```ts
/**
 * 一周中的第几天
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
export default function(day: number, month: number, year: number): string {
  const WEEKEND_LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return WEEKEND_LIST[new Date(`${year}-${month}-${day}`).getDay()]
}
```
