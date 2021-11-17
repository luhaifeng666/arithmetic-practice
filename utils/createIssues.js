const { Octokit } = require("octokit");
const core = require('@actions/core');
const docs = require('./getAllDocs')

const auth = core.getInput('token')
const octokit = new Octokit({ auth })

// 定义项目通用参数
const REPO_INFO = {
	owner: "octocat",
	repo: "hello-world"
}
// 获取所有issues
let issuesList = []
const allIssues = octokit.paginate.iterator(octokit.rest.issues.listForRepo, {
	...REPO_INFO,
	per_page: 100,
})

for await (const { data: issues } of allIssues) {
	issuesList = issues.map(issue => issue.name)
}

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
