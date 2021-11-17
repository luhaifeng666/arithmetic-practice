const vuepressConfig = require("../docs/.vuepress/config")
const fs = require("fs")
const path = require("path")
const {parse} = require("markdown-to-ast")

const baseDir = '/notes/exercises/'

// 获取习题文件
const { themeConfig: { sidebar } } = vuepressConfig
const exercisesSidebar = sidebar[`${baseDir}`]
const exercisesFiles = exercisesSidebar.reduce((files, item) => {
	if ( item && item.children ) {
		files.push(...item.children)
	}
	return files
}, [])

const docs = exercisesFiles.map(fileDir => {
	const content = fs.readFileSync(path.resolve(__dirname, '../', `docs${baseDir}${fileDir}`), {
		encoding: 'utf-8'
	})
	const { children } = parse(content)
	const titleConfig = children.filter(ch => ch.type === 'Header' && ch.depth === 1)
	let title = ''
	if (titleConfig && titleConfig.length) title = titleConfig[0].raw.replace('# ', '')
	return {
		title,
		fileDir
	}
})

module.exports = { exercisesSidebar, exercisesFiles, docs }
