const { baseUrl } = require("./testData");

describe("Unauthenticated Landing Page", () => {
	beforeAll(async () => {
		await page.goto(baseUrl);
	});

	it("Has the expected splash message", async () => {
		const navbar = await page.$("pierce/#splash");
		const text = await page.evaluate((el) => el.textContent, navbar);

		expect(text).toMatch("Welcome to Tenjin!");
	});

	it("Has the github login component", async () => {
		const GithubAuth = await page.$("pierce/#github-auth");
		expect(GithubAuth).toBeTruthy();
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
