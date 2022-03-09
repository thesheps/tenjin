export const expectedUsername = "my-lovely-username";
export const expectedRepo = { name: "my-lovely-repo" };
export const expectedBranch = { name: "main" };
export const expectedBranches = [
	{ name: "dev" },
	{ name: "my-lovely-branch" },
	expectedBranch,
];
export const port = "9090";
export const baseUserUrl = `http://${expectedUsername}.localhost:${port}`;
export const repoUrl = `${baseUserUrl}/${expectedRepo.name}`;
export const branchesUrl = `${repoUrl}}/branches`;
