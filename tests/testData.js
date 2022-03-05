export const expectedUsername = "my-lovely-username";
export const expectedRepo = { name: "my-lovely-repo" };
export const expectedBranch = { name: "my-lovely-branch" };
export const port = "9090";
export const baseUrl = `http://localhost:${port}`;
export const baseUserUrl = `http://${expectedUsername}.localhost:${port}`;
export const repoUrl = `${baseUrl}/${expectedUsername}/${expectedRepo.name}`;
export const branchesUrl = `${repoUrl}}/branches`;
