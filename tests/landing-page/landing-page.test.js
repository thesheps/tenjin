const { baseUserUrl, baseUrl, expectedUsername } = require("../testData");

describe("Landing Page", () => {
	beforeAll(async () => {
		await page.goto(baseUrl);
	});

	it("Has the expected title", async () => {
		const title = await page.title();
		expect(title).toBe("Tenjin");
	});

	it("Has the expected splash message", async () => {
		const navbar = await page.$("pierce/#splash");
		const text = await page.evaluate((el) => el.textContent, navbar);

		expect(text).toMatch("Welcome to Tenjin!");
	});

	it("Has the navbar component", async () => {
		const navbar = await page.$("pierce/#nav-bar");
		expect(navbar).toBeTruthy();
	});

	it("Has the github login component", async () => {
		const GithubUsername = await page.$("pierce/#github-username");
		expect(GithubUsername).toBeTruthy();
	});

	it("Has the repo lister component", async () => {
		await page.goto(baseUserUrl);

		const repoLister = await page.$("pierce/#repo-lister");
		expect(repoLister).toBeTruthy();

		const githubAuth = await page.$("pierce/#github-auth");
		expect(githubAuth).toBeTruthy();
	});
});
