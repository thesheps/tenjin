describe("Github Login", () => {
	const username = "testUsername";

	beforeEach(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);
	});

	it("Requires both fields to be populated", async () => {
		const loginButton = await page.$("pierce/#login-button");
		var isDisabled = await page.evaluate((el) => el.disabled, loginButton);
		expect(isDisabled).toBeTruthy();

		await page.type("pierce/input[name=username]", username);

		isDisabled = await page.evaluate((el) => el.disabled, loginButton);
		expect(isDisabled).toBeFalsy();
	});

	it("Triggers the loading spinner when you smash that login button", async () => {
		const loginButton = await page.$("pierce/#login-button");
		var isLoading = await page.evaluate((el) => el.ariaBusy, loginButton);
		expect(isLoading).toBeFalsy();

		await page.type("pierce/input[name=username]", username);
		await loginButton.click();

		isLoading = await page.evaluate((el) => el.ariaBusy, loginButton);
		expect(isLoading).toBeTruthy();
	});

	it("Loads the expected repos for the given user", async () => {
		const expectedRepo = { name: "my-lovely-repo" };
		const repoUrl = `https://api.github.com/users/${username}/repos`;

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

		const repoLister = await page.$("pierce/#repo-lister");
		const repoListing = await page.evaluate((el) => el.textContent, repoLister);

		expect(repoListing).toMatch(expectedRepo.name);
	});
});
