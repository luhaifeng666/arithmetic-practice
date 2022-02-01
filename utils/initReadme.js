const { writeReadme } = require('./common')
const { README_CONFIG } = require('../constants/common')

// 将内容写入README.md
README_CONFIG.forEach(config => {
	writeReadme(config)
})
