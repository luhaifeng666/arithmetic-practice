const fs = require('fs')
const path = require('path')
const { docs, exercisesSidebar } = require('./getAllDocs')

const baseUrl = 'https://luhaifeng666.github.io/arithmetic-practice/notes/exercises/'
const baseContent = `# arithmetic-practice

算法练习笔记, 从零开始，（争取）每日一题！冲！欢迎⭐️！

项目地址[请戳](https://luhaifeng666.github.io/arithmetic-practice/)~

## 目录结构

`
// 生成文档地址跟名称的对应关系字典
const sidebarTree = docs.reduce((obj, doc) => ({
	...obj,
	[doc.fileDir]: doc.title
}), {})
// 遍历生成目录结构
const catalog = exercisesSidebar.slice(1).reduce((str, sidebar) => {
	const { title, children } = sidebar
	let res = `- ${title}\n`
	if (children && children.length) {
		res += children.map(ch => `  - [${sidebarTree[ch]}](${baseUrl}${ch.slice(0, -3)}.html)`).join('\n')
	}
	return str + res + '\n'
}, '')

// 将内容写入README.md
fs.writeFile(path.resolve(__dirname, '../', 'README.md'), baseContent + catalog, {
	encoding: 'utf-8'
}, (err) => {
	if (err) console.error(`Write README.md error: ${err}`)
})


