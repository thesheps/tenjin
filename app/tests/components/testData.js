export const expectedAccount = "my-lovely-account";
export const expectedToken = "my-lovely-token";
export const expectedRepo = { name: "my-lovely-repo" };
export const expectedBranch = { name: "main" };
export const expectedBranches = [
	{ name: "dev" },
	{ name: "my-lovely-branch" },
	expectedBranch,
];
export const port = "9090";
export const baseUrl = `http://localhost:${port}`;
export const repoUrl = `${baseUrl}/${expectedRepo.name}`;
export const branchesUrl = `${repoUrl}}/branches`;
