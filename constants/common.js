// 定义需要初始化的README的路径以及默认内容
const path = require('path')

const README_CONFIG = [
	{
		target: path.resolve(__dirname, '../', 'README.md'),
		content: `# arithmetic-practice

![nodejs](https://img.shields.io/badge/node-v14.15.0-green)
![jest](https://img.shields.io/badge/jest-%5E27.1.0-yellow)
![octokit](https://img.shields.io/badge/octokit-%5E1.7.0-lightgrey)
![typescript](https://img.shields.io/badge/typescript-%5E4.4.2-blue)
![vuepress](https://img.shields.io/badge/vuepress-%5E1.8.2-brightgreen)
![coverage](https://img.shields.io/badge/coverage-96.61%25-green)

算法练习笔记, 从零开始，（争取）每日一题！冲！欢迎⭐️！

项目地址[请戳](https://luhaifeng666.github.io/arithmetic-practice/)~

## 目录结构
		
`
	}, {
		target: path.resolve(__dirname, '../', 'docs/notes/exercises/README.md'),
		content: `---
title: 算法练习
---

整理的算法习题， 题目来源于[LeetCode](https://leetcode-cn.com/)。

## 目录
		
`
	}
]

module.exports = { README_CONFIG }
