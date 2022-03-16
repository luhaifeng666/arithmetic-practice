export const themeData = {
  "lastUpdated": "Last Updated",
  "sidebarDepth": 2,
  "sidebar": {
    "/notes/exercises/": [
      "/notes/exercises/",
      {
        "text": "数组",
        "collapsible": true,
        "children": [
          "/notes/exercises/array/containsDuplicate.md",
          "/notes/exercises/array/intersect.md",
          "/notes/exercises/array/intersection.md",
          "/notes/exercises/array/isValidSudoku.md",
          "/notes/exercises/array/majorityElement.md",
          "/notes/exercises/array/maxProfit.md",
          "/notes/exercises/array/maximumDifference.md",
          "/notes/exercises/array/merge.md",
          "/notes/exercises/array/minimumDifference.md",
          "/notes/exercises/array/missingNumber.md",
          "/notes/exercises/array/moveZeroes.md",
          "/notes/exercises/array/plusOne.md",
          "/notes/exercises/array/removeDuplicates.md",
          "/notes/exercises/array/removeElement.md",
          "/notes/exercises/array/rotate.md",
          "/notes/exercises/array/rotateImage.md",
          "/notes/exercises/array/singleNumber.md",
          "/notes/exercises/array/solution.md",
          "/notes/exercises/array/twoSum.md"
        ]
      },
      {
        "text": "树",
        "collapsible": true,
        "children": [
          "/notes/exercises/tree/isSymmetric.md",
          "/notes/exercises/tree/isValidBST.md",
          "/notes/exercises/tree/levelNode.md",
          "/notes/exercises/tree/maxDepth.md",
          "/notes/exercises/tree/preorderTraversal.md",
          "/notes/exercises/tree/sortedArrayToBST.md"
        ]
      },
      {
        "text": "栈",
        "collapsible": true,
        "children": [
          "/notes/exercises/stack/isValid.md",
          "/notes/exercises/stack/minStack.md"
        ]
      },
      {
        "text": "字符串",
        "collapsible": true,
        "children": [
          "/notes/exercises/string/addBinary.md",
          "/notes/exercises/string/convertToBase7.md",
          "/notes/exercises/string/convertToTitle.md",
          "/notes/exercises/string/countAndSay.md",
          "/notes/exercises/string/dayOfTheWeek.md",
          "/notes/exercises/string/findLUSlength.md",
          "/notes/exercises/string/firstUniqChar.md",
          "/notes/exercises/string/isAnagram.md",
          "/notes/exercises/string/isPalindrome.md",
          "/notes/exercises/string/lengthOfLastWord.md",
          "/notes/exercises/string/longestCommonPrefix.md",
          "/notes/exercises/string/myAtoi.md",
          "/notes/exercises/string/reverse.md",
          "/notes/exercises/string/reverseOnlyLetters.md",
          "/notes/exercises/string/reverseString.md",
          "/notes/exercises/string/sortSentence.md",
          "/notes/exercises/string/strStr.md"
        ]
      },
      {
        "text": "链表",
        "collapsible": true,
        "children": [
          "/notes/exercises/chainTable/deleteDuplicates.md",
          "/notes/exercises/chainTable/deleteNode.md",
          "/notes/exercises/chainTable/hasCycle.md",
          "/notes/exercises/chainTable/isPalindrome.md",
          "/notes/exercises/chainTable/mergeTwoLists.md",
          "/notes/exercises/chainTable/removeNthFromEnd.md",
          "/notes/exercises/chainTable/reverseList.md"
        ]
      },
      {
        "text": "数学",
        "collapsible": true,
        "children": [
          "/notes/exercises/math/countPrimes.md",
          "/notes/exercises/math/fuzzBuzz.md",
          "/notes/exercises/math/getNumbers.md",
          "/notes/exercises/math/getRow.md",
          "/notes/exercises/math/isPowerOfThree.md",
          "/notes/exercises/math/mySqrt.md",
          "/notes/exercises/math/romanToInt.md",
          "/notes/exercises/math/simplifiedFractions.md",
          "/notes/exercises/math/tribonacci.md"
        ]
      },
      {
        "text": "排序和搜索",
        "collapsible": true,
        "children": [
          "/notes/exercises/sort/isBadVersion.md"
        ]
      },
      {
        "text": "动态规划",
        "collapsible": true,
        "children": [
          "/notes/exercises/dp/climbStairs.md",
          "/notes/exercises/dp/maxProfit.md",
          "/notes/exercises/dp/maxSubArray.md",
          "/notes/exercises/dp/rob.md"
        ]
      },
      {
        "text": "其他",
        "collapsible": true,
        "children": [
          "/notes/exercises/other/addDigits.md",
          "/notes/exercises/other/generate.md",
          "/notes/exercises/other/hammingDistance.md",
          "/notes/exercises/other/hammingWeight.md",
          "/notes/exercises/other/reverseBits.md"
        ]
      }
    ]
  },
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "Notes",
      "link": "/notes/exercises/"
    },
    {
      "text": "酱豆腐精的小站",
      "link": "https://luhaifeng666.github.io"
    },
    {
      "text": "GitHub",
      "link": "https://github.com/luhaifeng666/arithmetic-practice"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
