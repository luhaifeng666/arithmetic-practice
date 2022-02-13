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
