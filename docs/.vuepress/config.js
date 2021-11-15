
const fs = require('fs')
const BASE_URL = './docs/views/'

let getFiles = function(type) {
	let baseUrl = type && `${type.split('/')[1]}/`
	let urls = fs.readdirSync(`${BASE_URL}${type}`).map(item => {
		return baseUrl + item
	})
	return urls
}
let sidebar = {}
const pageConfig = [
	// {
	// 	name: '/views/CSS3Note/',
	// 	baseUrl: 'CSS3Note/',
	// 	pathes: ['', {
	// 		name: '背景与边框',
	// 		url: 'backgroundAndBorder'
	// 	}, {
	// 		name: '201907归档',
	// 		url: '201907'
	// 	}]
	// },
	// {
	// 	name: '/views/JSNote/',
	// 	baseUrl: 'JSNote/',
	// 	pathes: ['', {
	// 		name: '201907归档',
	// 		url: '201907'
	// 	},{
	// 		name: 'Nodejs',
	// 		url: 'Nodejs'
	// 	},{
	// 		name: '数据结构与算法',
	// 		url: 'DataStructureAndAlgorithm'
	// 	},{
	// 		name: 'TypeScript',
	// 		url: 'TypeScript'
	// 	}]
	// }
]
pageConfig.forEach(item => {
	sidebar[item.name] = []
	item.pathes.forEach(path => {
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
		sidebar: {
			'/notes/': [
				'',
				'twoSum'
			]
		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Notes', link: '/notes/' },
			{ text: 'GitHub', link: 'https://github.com/luhaifeng666/arithmetic-practice' },
		],
	}
}

module.exports = config
