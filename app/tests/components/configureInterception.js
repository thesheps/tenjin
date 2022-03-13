import { expectedAccount, expectedRepo, expectedBranches } from "./testData";

const repoUrl = `https://api.github.com/users/${expectedAccount}/repos`;
const branchesUrl = `https://api.github.com/repos/${expectedAccount}/${expectedRepo.name}/branches`;

export default (page) => {
	page.setRequestInterception(true);
	page.on("request", (request) => {
		const url = request.url();

		switch (url) {
			case repoUrl:
				request.respond({
					headers: { "Access-Control-Allow-Origin": "*" },
					body: JSON.stringify([expectedRepo]),
				});
				break;
			case branchesUrl:
				request.respond({
					headers: { "Access-Control-Allow-Origin": "*" },
					body: JSON.stringify(expectedBranches),
				});
				break;
			default:
				request.continue();
				break;
		}
	});
};