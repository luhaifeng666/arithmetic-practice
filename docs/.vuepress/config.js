
const fs = require('fs')
const BASE_URL = './docs/notes/'

let getFiles = function(type) {
	let baseUrl = type && `${type.split('/')[1]}/`
	let urls = fs.readdirSync(`${BASE_URL}${type}`).map(item => {
		return baseUrl + item
	})
	return urls
}
let sidebar = {}
const pageConfig = [
	{
		name: '/notes/exercises/',
		baseUrl: 'exercises/',
		paths: ['', {
			name: '数组',
			url: 'array'
		}]
	},
]
pageConfig.forEach(item => {
	sidebar[item.name] = []
	item.paths.forEach(path => {
		if(path) {
			let children = getFiles(`${item.baseUrl}${path.url}`)
			let conf = {
				title: path.name,
				collapsable: false,
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
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Notes', link: '/notes/exercises/' },
			{ text: 'GitHub', link: 'https://github.com/luhaifeng666/arithmetic-practice' },
		],
	}
}

module.exports = config
