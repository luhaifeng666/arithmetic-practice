import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-68634afb","/notes/exercises/",{"title":"算法练习"},["/notes/exercises/index.html","/notes/exercises/README.md"]],
  ["v-d67718c4","/notes/exercises/array/containsDuplicate.html",{"title":"存在重复元素"},["/notes/exercises/array/containsDuplicate","/notes/exercises/array/containsDuplicate.md"]],
  ["v-728e290b","/notes/exercises/array/intersect.html",{"title":"两个数组的交集 II"},["/notes/exercises/array/intersect","/notes/exercises/array/intersect.md"]],
  ["v-42d6405f","/notes/exercises/array/intersection.html",{"title":"两个数组的交集"},["/notes/exercises/array/intersection","/notes/exercises/array/intersection.md"]],
  ["v-6ebcb07e","/notes/exercises/array/isValidSudoku.html",{"title":"有效的数独"},["/notes/exercises/array/isValidSudoku","/notes/exercises/array/isValidSudoku.md"]],
  ["v-fb2f1cfa","/notes/exercises/array/majorityElement.html",{"title":"多数元素"},["/notes/exercises/array/majorityElement","/notes/exercises/array/majorityElement.md"]],
  ["v-1996bb02","/notes/exercises/array/maxProfit.html",{"title":"买卖股票的最佳时机 II"},["/notes/exercises/array/maxProfit","/notes/exercises/array/maxProfit.md"]],
  ["v-ce99dbdc","/notes/exercises/array/merge.html",{"title":"合并两个有序数组"},["/notes/exercises/array/merge","/notes/exercises/array/merge.md"]],
  ["v-207b04bf","/notes/exercises/array/minimumDifference.html",{"title":"学生分数的最小差值"},["/notes/exercises/array/minimumDifference","/notes/exercises/array/minimumDifference.md"]],
  ["v-7242075b","/notes/exercises/array/missingNumber.html",{"title":"缺失数字"},["/notes/exercises/array/missingNumber","/notes/exercises/array/missingNumber.md"]],
  ["v-732580e1","/notes/exercises/array/moveZeroes.html",{"title":"移动零"},["/notes/exercises/array/moveZeroes","/notes/exercises/array/moveZeroes.md"]],
  ["v-74d8141e","/notes/exercises/array/plusOne.html",{"title":"加一"},["/notes/exercises/array/plusOne","/notes/exercises/array/plusOne.md"]],
  ["v-86380648","/notes/exercises/array/removeDuplicates.html",{"title":"删除排序数组中的重复项"},["/notes/exercises/array/removeDuplicates","/notes/exercises/array/removeDuplicates.md"]],
  ["v-a9f3511c","/notes/exercises/array/removeElement.html",{"title":"移除元素"},["/notes/exercises/array/removeElement","/notes/exercises/array/removeElement.md"]],
  ["v-1e68400d","/notes/exercises/array/rotate.html",{"title":"旋转数组"},["/notes/exercises/array/rotate","/notes/exercises/array/rotate.md"]],
  ["v-c8a1146c","/notes/exercises/array/rotateImage.html",{"title":"旋转图像"},["/notes/exercises/array/rotateImage","/notes/exercises/array/rotateImage.md"]],
  ["v-f64da392","/notes/exercises/array/singleNumber.html",{"title":"只出现一次的数字"},["/notes/exercises/array/singleNumber","/notes/exercises/array/singleNumber.md"]],
  ["v-d265fa22","/notes/exercises/array/solution.html",{"title":"打乱数组"},["/notes/exercises/array/solution","/notes/exercises/array/solution.md"]],
  ["v-cd38e0ee","/notes/exercises/array/twoSum.html",{"title":"两数之和"},["/notes/exercises/array/twoSum","/notes/exercises/array/twoSum.md"]],
  ["v-8a74e536","/notes/exercises/chainTable/deleteNode.html",{"title":"删除链表中的节点"},["/notes/exercises/chainTable/deleteNode","/notes/exercises/chainTable/deleteNode.md"]],
  ["v-58485234","/notes/exercises/chainTable/hasCycle.html",{"title":"环形链表"},["/notes/exercises/chainTable/hasCycle","/notes/exercises/chainTable/hasCycle.md"]],
  ["v-c87ea322","/notes/exercises/chainTable/isPalindrome.html",{"title":"回文链表"},["/notes/exercises/chainTable/isPalindrome","/notes/exercises/chainTable/isPalindrome.md"]],
  ["v-7c3879c2","/notes/exercises/chainTable/mergeTwoLists.html",{"title":"合并两个有序链表"},["/notes/exercises/chainTable/mergeTwoLists","/notes/exercises/chainTable/mergeTwoLists.md"]],
  ["v-e9712402","/notes/exercises/chainTable/removeNthFromEnd.html",{"title":"删除链表的倒数第N个节点"},["/notes/exercises/chainTable/removeNthFromEnd","/notes/exercises/chainTable/removeNthFromEnd.md"]],
  ["v-2db372c0","/notes/exercises/chainTable/reverseList.html",{"title":"反转链表"},["/notes/exercises/chainTable/reverseList","/notes/exercises/chainTable/reverseList.md"]],
  ["v-9973a9fc","/notes/exercises/math/countPrimes.html",{"title":"计数质数"},["/notes/exercises/math/countPrimes","/notes/exercises/math/countPrimes.md"]],
  ["v-35f1ddcb","/notes/exercises/math/fuzzBuzz.html",{"title":"Fizz Buzz"},["/notes/exercises/math/fuzzBuzz","/notes/exercises/math/fuzzBuzz.md"]],
  ["v-ea71548e","/notes/exercises/math/getNumbers.html",{"title":"复数乘法"},["/notes/exercises/math/getNumbers","/notes/exercises/math/getNumbers.md"]],
  ["v-a5202dae","/notes/exercises/math/getRow.html",{"title":"杨辉三角 II"},["/notes/exercises/math/getRow","/notes/exercises/math/getRow.md"]],
  ["v-6e84f941","/notes/exercises/math/isPowerOfThree.html",{"title":"3的幂"},["/notes/exercises/math/isPowerOfThree","/notes/exercises/math/isPowerOfThree.md"]],
  ["v-9bfed394","/notes/exercises/math/romanToInt.html",{"title":"罗马数字转整数"},["/notes/exercises/math/romanToInt","/notes/exercises/math/romanToInt.md"]],
  ["v-3986f368","/notes/exercises/math/simplifiedFractions.html",{"title":"最简分数"},["/notes/exercises/math/simplifiedFractions","/notes/exercises/math/simplifiedFractions.md"]],
  ["v-5471b662","/notes/exercises/math/tribonacci.html",{"title":"第 N 个泰波那契数"},["/notes/exercises/math/tribonacci","/notes/exercises/math/tribonacci.md"]],
  ["v-343ae9bc","/notes/exercises/dp/climbStairs.html",{"title":"爬楼梯"},["/notes/exercises/dp/climbStairs","/notes/exercises/dp/climbStairs.md"]],
  ["v-40dabf59","/notes/exercises/dp/maxProfit.html",{"title":"买卖股票的最佳时机"},["/notes/exercises/dp/maxProfit","/notes/exercises/dp/maxProfit.md"]],
  ["v-f995cc78","/notes/exercises/dp/maxSubArray.html",{"title":"最大子序和"},["/notes/exercises/dp/maxSubArray","/notes/exercises/dp/maxSubArray.md"]],
  ["v-e265b308","/notes/exercises/dp/rob.html",{"title":"打家劫舍"},["/notes/exercises/dp/rob","/notes/exercises/dp/rob.md"]],
  ["v-697867a6","/notes/exercises/sort/isBadVersion.html",{"title":"第一个错误的版本"},["/notes/exercises/sort/isBadVersion","/notes/exercises/sort/isBadVersion.md"]],
  ["v-4595d8ea","/notes/exercises/other/generate.html",{"title":"杨辉三角"},["/notes/exercises/other/generate","/notes/exercises/other/generate.md"]],
  ["v-3379a075","/notes/exercises/other/hammingDistance.html",{"title":"汉明距离"},["/notes/exercises/other/hammingDistance","/notes/exercises/other/hammingDistance.md"]],
  ["v-0cb727dc","/notes/exercises/other/hammingWeight.html",{"title":"位1的个数"},["/notes/exercises/other/hammingWeight","/notes/exercises/other/hammingWeight.md"]],
  ["v-7bf0e6aa","/notes/exercises/other/reverseBits.html",{"title":"颠倒二进制位"},["/notes/exercises/other/reverseBits","/notes/exercises/other/reverseBits.md"]],
  ["v-475a8cee","/notes/exercises/stack/isValid.html",{"title":"有效的括号"},["/notes/exercises/stack/isValid","/notes/exercises/stack/isValid.md"]],
  ["v-47a17521","/notes/exercises/stack/minStack.html",{"title":"最小栈"},["/notes/exercises/stack/minStack","/notes/exercises/stack/minStack.md"]],
  ["v-627c1e02","/notes/exercises/tree/isSymmetric.html",{"title":"对称二叉树"},["/notes/exercises/tree/isSymmetric","/notes/exercises/tree/isSymmetric.md"]],
  ["v-096f7a92","/notes/exercises/tree/isValidBST.html",{"title":"验证二叉搜索树"},["/notes/exercises/tree/isValidBST","/notes/exercises/tree/isValidBST.md"]],
  ["v-8b80feae","/notes/exercises/tree/levelNode.html",{"title":"二叉树的层序遍历"},["/notes/exercises/tree/levelNode","/notes/exercises/tree/levelNode.md"]],
  ["v-6f438bf8","/notes/exercises/tree/maxDepth.html",{"title":"二叉树的最大深度"},["/notes/exercises/tree/maxDepth","/notes/exercises/tree/maxDepth.md"]],
  ["v-788a6808","/notes/exercises/tree/preorderTraversal.html",{"title":"二叉树的前序遍历"},["/notes/exercises/tree/preorderTraversal","/notes/exercises/tree/preorderTraversal.md"]],
  ["v-254cea57","/notes/exercises/tree/sortedArrayToBST.html",{"title":"将有序数组转换为二叉搜索树"},["/notes/exercises/tree/sortedArrayToBST","/notes/exercises/tree/sortedArrayToBST.md"]],
  ["v-532ce88c","/notes/exercises/string/addBinary.html",{"title":"二进制求和"},["/notes/exercises/string/addBinary","/notes/exercises/string/addBinary.md"]],
  ["v-2c08af19","/notes/exercises/string/countAndSay.html",{"title":"外观数列"},["/notes/exercises/string/countAndSay","/notes/exercises/string/countAndSay.md"]],
  ["v-e287ccb8","/notes/exercises/string/dayOfTheWeek.html",{"title":"一周中的第几天"},["/notes/exercises/string/dayOfTheWeek","/notes/exercises/string/dayOfTheWeek.md"]],
  ["v-4f4f3a15","/notes/exercises/string/firstUniqChar.html",{"title":"字符串中的第一个唯一字符"},["/notes/exercises/string/firstUniqChar","/notes/exercises/string/firstUniqChar.md"]],
  ["v-070fa97b","/notes/exercises/string/isAnagram.html",{"title":"有效的字母异位词"},["/notes/exercises/string/isAnagram","/notes/exercises/string/isAnagram.md"]],
  ["v-e71a351a","/notes/exercises/string/isPalindrome.html",{"title":"验证回文串"},["/notes/exercises/string/isPalindrome","/notes/exercises/string/isPalindrome.md"]],
  ["v-6f44b6b9","/notes/exercises/string/lengthOfLastWord.html",{"title":"最后一个单词的长度"},["/notes/exercises/string/lengthOfLastWord","/notes/exercises/string/lengthOfLastWord.md"]],
  ["v-41734815","/notes/exercises/string/longestCommonPrefix.html",{"title":"最长公共前缀"},["/notes/exercises/string/longestCommonPrefix","/notes/exercises/string/longestCommonPrefix.md"]],
  ["v-297c9ec6","/notes/exercises/string/myAtoi.html",{"title":"字符串转换整数 (atoi)"},["/notes/exercises/string/myAtoi","/notes/exercises/string/myAtoi.md"]],
  ["v-eff374cc","/notes/exercises/string/reverse.html",{"title":"整数反转"},["/notes/exercises/string/reverse","/notes/exercises/string/reverse.md"]],
  ["v-18b89b49","/notes/exercises/string/reverseString.html",{"title":"反转字符串"},["/notes/exercises/string/reverseString","/notes/exercises/string/reverseString.md"]],
  ["v-8bd83256","/notes/exercises/string/sortSentence.html",{"title":"将句子排序"},["/notes/exercises/string/sortSentence","/notes/exercises/string/sortSentence.md"]],
  ["v-8fc83054","/notes/exercises/string/strStr.html",{"title":"实现 strStr()"},["/notes/exercises/string/strStr","/notes/exercises/string/strStr.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
