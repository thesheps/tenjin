describe("Repo Lister", () => {
	const username = "testUsername";
	const expectedRepo = { name: "my-lovely-repo" };
	const repoUrl = `https://api.github.com/users/${username}/repos`;

	beforeAll(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);

		page.setRequestInterception(true);
		page.on("request", (request) => {
			if (request.url() == repoUrl) {
				request.respond({
					headers: { "Access-Control-Allow-Origin": "*" },
					body: JSON.stringify([expectedRepo]),
				});
			} else {
				request.continue();
			}
		});

		await page.type("pierce/input[name=username]", username);
		await page.click("pierce/#login-button");
	});

	it("Loads the expected repos for the given user", async () => {
		const repoLister = await page.$("pierce/#repo-lister");
		const repoListing = await repoLister.$(".repo");
		const repo = await page.evaluate((el) => el.textContent, repoListing);

		expect(repo).toMatch(expectedRepo.name);
	});
});
