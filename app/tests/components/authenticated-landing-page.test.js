const { baseUrl } = require("./testData");
import setupTest from "./setupTest";

describe("Authenticated Landing Page", () => {
	beforeAll(async () => {
		await setupTest(page, baseUrl);
	});

	it("Has the expected title", async () => {
		const title = await page.title();
		expect(title).toBe("Tenjin");
	});

	it("Has the navbar component", async () => {
		const navbar = await page.$("pierce/#nav-bar");
		expect(navbar).toBeTruthy();
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
