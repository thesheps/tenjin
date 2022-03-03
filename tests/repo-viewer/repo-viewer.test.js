describe("Repo Viewer", () => {
	const expectedUsername = "testUsername";
	const expectedRepo = { name: "my-lovely-repo" };
	const expectedBranch = { name: "my-lovely-branch" };
	const branchesUrl = `https://api.github.com/repos/${expectedUsername}/${expectedRepo.name}/branches`;

	beforeAll(async () => {
		page.setRequestInterception(true);
		page.on("request", (request) => {
			if (request.url() == branchesUrl) {
				request.respond({
					headers: { "Access-Control-Allow-Origin": "*" },
					body: JSON.stringify([expectedBranch]),
				});
			} else {
				request.continue();
			}
		});

		await page.goto(
			`http://localhost:${process.env.PORT}/${expectedUsername}/${expectedRepo.name}`
		);
	});

	it("Loads the expected branches for the given repo", async () => {
		const repoViewer = await page.$("pierce/#repo-viewer");
		const text = await page.evaluate((el) => el.innerText, repoViewer);

		expect(text).toMatch(expectedBranch.name);
	});
});
