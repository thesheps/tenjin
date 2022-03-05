import configureInterception from "../configureInterception";
import { baseUrl, expectedRepo, expectedUsername } from "../testData";

describe("Repo Lister", () => {
	beforeAll(async () => {
		configureInterception(page);

		await page.goto(baseUrl);
		await page.type("pierce/input[name=username]", expectedUsername);
		await page.click("pierce/#login-button");
	});

	it("Loads the expected repos for the given user", async () => {
		const repoLister = await page.$("pierce/#repo-lister");
		const repoListing = await repoLister.$(".repo");
		const repo = await page.evaluate((el) => el.textContent, repoListing);

		expect(repo).toMatch(expectedRepo.name);
	});
});
