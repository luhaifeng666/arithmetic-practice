const { Octokit } = require("octokit");
const core = require('@actions/core');

const auth = core.getInput('token')
const octokit = new Octokit({ auth })

octokit.rest.issues.create({
	owner: "luhaifeng666",
	repo: "arithmetic-practice",
	title: "Hello world from",
});
