import { expectedBranch, repoUrl } from "../testData";
import configureInterception from "../configureInterception";

describe("Repo Viewer", () => {
	beforeAll(async () => {
		configureInterception(page);
		await page.goto(repoUrl);
	});

	it("Loads the expected branches for the given repo", async () => {
		const repoViewer = await page.$("pierce/#repo-viewer");
		const text = await page.evaluate((el) => el.innerText, repoViewer);

		expect(text).toMatch(expectedBranch.name);
	});
});
