import setupTest from "../setupTest";
import { baseUrl, expectedRepo } from "../testData";

describe("Repo Lister", () => {
	beforeAll(async () => {
		await setupTest(page, baseUrl);
	});

	it("Loads the expected repos for the given user", async () => {
		const repoLister = await page.$("pierce/#repo-lister");
		const repoListing = await repoLister.$(".repo");
		const repo = await page.evaluate((el) => el.textContent, repoListing);

		expect(repo).toMatch(expectedRepo.name);
	});

	it("Displays an empty div if the repos cannot be obtained", async () => {
		await page.evaluate(() => localStorage.clear());

		const repoLister = await page.$("pierce/#repo-lister");

		expect(repoLister).toMatch("");
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
