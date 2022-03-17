import { expectedBranches, repoUrl } from "../testData";
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

	it("Loads the url for the selected branch", async () => {
		const branch = "dev";
		await page.select("pierce/#branches", branch);

		const url = await page.url();
		expect(url).toEqual(`${repoUrl}/${branch}`);
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
