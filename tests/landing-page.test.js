describe("Landing Page", () => {
	beforeAll(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);
	});

	it("Has the expected title", async () => {
		const title = await page.title();

		expect(title).toBe("Tenjin");
	});

	it("Has the expected splash message", async () => {
		await expect(page).toMatch("Welcome to Tenjin!", {
			traverseShadowRoots: true,
		});
	});

	it("Has the navbar component", async () => {
		const navbar = await page.$("pierce/#nav-bar");
		const text = await page.evaluate((el) => el.textContent, navbar);

		expect(text).toMatch("Tenjin.");
	});
});
