const { Octokit } = require("octokit");
const core = require('@actions/core');
const docs = require('./getAllDocs')

const auth = core.getInput('token')
const octokit = new Octokit({ auth })

// 定义项目通用参数
const REPO_INFO = {
	owner: "luhaifeng666",
	repo: "arithmetic-practice"
}
// 获取所有issues
let allIssues = []
async function getAllIssues () {
	return await octokit.paginate(octokit.rest.issues.listForRepo, {
		...REPO_INFO,
		per_page: 100,
	});
}
getAllIssues().then(data => {
	allIssues = data
}).catch(err => { console.log(err) })


let issuesList = allIssues.map(issue => issue.title)
// 获取没有创建issue的标题
const titles = docs.filter(title => !issuesList.includes(title))
// 将没有创建issue的算法都创建对应的issue
titles.forEach(title => {
	octokit.rest.issues.create({
		...REPO_INFO,
		title,
		body: `关于${title}的更多解法，欢迎在issue中讨论~`
	});
})
