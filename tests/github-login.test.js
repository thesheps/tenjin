describe("Github Login", () => {
	beforeAll(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);
	});

	it("Requires both fields to be populated", async () => {
		const loginButton = await page.$("pierce/#login-button");
		var isDisabled = await page.evaluate((el) => el.disabled, loginButton);
		expect(isDisabled).toBeTruthy();

		await page.type("pierce/input[name=git-user]", "test");
		await page.type("pierce/input[name=access-token]", "test");
		isDisabled = await page.evaluate((el) => el.disabled, loginButton);

		expect(isDisabled).toBeFalsy();
	});
});
