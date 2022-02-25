
const fs = require('fs')
const BASE_URL = './docs/notes/'

let getFiles = function(type) {
	let baseUrl = type && `${type.split('/')[1]}/`
	let urls = fs.readdirSync(`${BASE_URL}${type}`).map(item => {
		return `/notes/exercises/${baseUrl}${item}`
	})
	return urls
}
let sidebar = {}
const pageConfig = [
	{
		name: '/notes/exercises/',
		baseUrl: 'exercises/',
		paths: ['/notes/exercises/', {
			name: '数组',
			url: 'array'
		}, {
			name: '树',
			url: 'tree'
		}, {
			name: '栈',
			url: 'stack'
		}, {
			name: '字符串',
			url: 'string'
		}, {
			name: '链表',
			url: 'chainTable'
		}, {
			name: '数学',
			url: 'math'
		}, {
			name: '排序和搜索',
			url: 'sort'
		}, {
			name: '动态规划',
			url: 'dp'
		}, {
			name: '其他',
			url: 'other'
		}]
	}
]
pageConfig.forEach(item => {
	sidebar[item.name] = []
	item.paths.forEach(path => {
		if(typeof(path) !== 'string') {
			let children = getFiles(`${item.baseUrl}${path.url}`)
			let conf = {
				text: path.name,
				collapsible: true,
				children
			}
			sidebar[item.name].push(conf)
		} else {
			sidebar[item.name].push(path)
		}
	})
})

const config = {
	title: 'Arithmetic',
	description: ' ',
	base: '/arithmetic-practice/',
	head: [
		['link', { rel: 'icon', href: '/images/favicon.ico' }]
	],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		lastUpdated: 'Last Updated',
		sidebarDepth: 2,
		sidebar,
		navbar: [
			{ text: 'Home', link: '/' },
			{ text: 'Notes', link: '/notes/exercises/' },
			{ text: '酱豆腐精的小站', link: 'https://luhaifeng666.github.io' },
			{ text: 'GitHub', link: 'https://github.com/luhaifeng666/arithmetic-practice' },
		],
	},
	plugins: [
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				options: {
					el: '#valine-vuepress-comment',
					appId: 'frgkHsrvs3GlDqBrcbvqo3mc-9Nh9j0Va',
					appKey: 'hkzBjVUXzCO3uyELHjKdUny8'
				}
			}
		],
		// [
		// 	'@vuepress/docsearch',
		// 	{
		// 		apiKey: '<API_KEY>',
		// 		indexName: '<INDEX_NAME>',
		// 		locales: {
		// 			'/': {
		// 				placeholder: 'Search',
		// 				translations: {
		// 					button: {
		// 						buttonText: 'Search',
		// 					},
		// 				},
		// 			},
		// 			'/zh/': {
		// 				placeholder: '搜索文档',
		// 				translations: {
		// 					button: {
		// 						buttonText: '搜索文档',
		// 					},
		// 				},
		// 			},
		// 		},
		// 	}
		// ],
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search',
					},
					'/zh/': {
						placeholder: '搜索',
					},
				},
			},
		]
	]
}

module.exports = config
