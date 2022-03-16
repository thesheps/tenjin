import { expectedBranch, expectedBranches, repoUrl } from "../testData";
import setupTest from "../setupTest";

describe("Repo Viewer", () => {
	beforeAll(async () => {
		await setupTest(page, repoUrl);
	});

	it("Loads the expected branches for the given repo", async () => {
		const repoViewer = await page.$("pierce/#repo-viewer");
		const branches = await repoViewer.$$eval("select > option", (branches) =>
			branches.map((b) => b.text)
		);

		expect(branches).toEqual(
			expect.arrayContaining(expectedBranches.map((b) => b.name))
		);
	});

	it("Preselects the master or main branch", async () => {
		const repoViewer = await page.$("pierce/#repo-viewer");
		const selected = await repoViewer.$eval("#branches", (el) => el.value);

		expect(selected).toMatch(expectedBranch.name);
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
