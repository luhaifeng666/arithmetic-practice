(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{386:function(s,a,t){s.exports=t.p+"assets/img/img.8c53cdc8.png"},387:function(s,a,t){s.exports=t.p+"assets/img/img_1.4bd5ac22.png"},388:function(s,a,t){s.exports=t.p+"assets/img/img_2.73a3409e.png"},406:function(s,a,t){"use strict";t.r(a);var n=t(54),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"删除链表中的节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除链表中的节点"}},[s._v("#")]),s._v(" 删除链表中的节点")]),s._v(" "),n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点head ，只能直接访问 要被删除的节点 。"),n("br"),s._v("\n题目数据保证需要删除的节点 不是末尾节点 。")]),s._v(" "),n("h4",{attrs:{id:"示例-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1：")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[n("img",{attrs:{src:t(386),alt:"img.png"}})])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [4,5,1,9], node = 5\n输出：[4,1,9]\n解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2：")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[n("img",{attrs:{src:t(387),alt:"img_1.png"}})])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [4,5,1,9], node = 1\n输出：[4,5,9]\n解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"示例-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[s._v("#")]),s._v(" 示例 3：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [1,2,3,4], node = 3\n输出：[1,2,4]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"示例-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[s._v("#")]),s._v(" 示例 4：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [0,1], node = 0\n输出：[1]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"示例-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[s._v("#")]),s._v(" 示例 5：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：head = [-3,5,-99], node = -3\n输出：[5,-99]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示：")]),s._v(" "),n("p",[s._v("链表中节点的数目范围是 [2, 1000]\n-1000 <= Node.val <= 1000\n链表中每个节点的值都是唯一的\n需要删除的节点 node 是 链表中的一个有效节点 ，且 不是末尾节点")])]),s._v(" "),n("h2",{attrs:{id:"题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("解题思路")]),s._v(" "),n("p",[s._v("这个题目看起来有点费解，示例中提供了 "),n("code",[s._v("head")]),s._v(" 以及 "),n("code",[s._v("node")]),s._v(" ，但是方法中只传入了node。于是我将入参打印出来看了下：\n"),n("img",{attrs:{src:t(388),alt:"img_2.png"}}),s._v("\n原来是个链式的对象。"),n("br"),s._v("\n结合输出中的内容，以及输出的预期结果，得知这道题目真正的目的是删除给定node的第一个节点，如此就简单多了。"),n("br"),s._v(" "),n("strong",[s._v("主要思路就是用后一个节点覆盖第一个节点即可。")])])]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {ListNode} node\n * @return {void} Do not return anything, modify node in-place instead.\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  val"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v("\n  next"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Node\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val\n  node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);