const fs = require("fs");
const {exercisesSidebar, docs} = require("./getAllDocs")

const baseUrl = 'https://luhaifeng666.github.io/arithmetic-practice/notes/exercises/'
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

// 将内容写入目标文档
function writeReadme (target, baseContent = '') {
	// 将内容写入README.md
	fs.writeFile(target, baseContent + catalog, {
		encoding: 'utf-8'
	}, (err) => {
		if (err) console.error(`Error: ${err}`)
	})
}

module.exports = { writeReadme }
