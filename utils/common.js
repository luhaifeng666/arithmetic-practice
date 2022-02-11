const fs = require("fs");
const {exercisesSidebar, docs} = require("./getAllDocs")

const baseUrl = 'https://luhaifeng666.github.io/arithmetic-practice/notes/exercises/'
// 生成文档地址跟名称的对应关系字典
const sidebarTree = docs.reduce((obj, doc) => ({
	...obj,
	[doc.fileDir]: doc.title
}), {})
// 遍历生成目录结构
const catalog = exercisesSidebar.slice(1).reduce((obj, sidebar) => {
	const { title, children } = sidebar
	let res = `<details>
  <summary>${title}</summary>
  
`
	if (children && children.length) {
		res += children.map(ch => `  - [${sidebarTree[ch]}](${baseUrl}${ch.slice(0, -3)}.html)`).join('\n')
	}
	obj.text += res + '\n </details> \n'
	obj.count += children.length
	return obj
}, {
	text: '',
	count: 0
})

// 将内容写入目标文档
function writeReadme ({ target, showTotal = false, content = '' }) {
	// 将内容写入README.md
	fs.writeFile(target, content + (showTotal ? `<div align="center">

算法练习笔记, 从零开始, 现在已练习 **${catalog.count} 道算法题** ！！（争取）每日一题！冲！欢迎⭐️！
	
</div>` : catalog.text), {
		encoding: 'utf-8'
	}, (err) => {
		if (err) console.error(`Error: ${err}`)
	})
}

module.exports = { writeReadme }
