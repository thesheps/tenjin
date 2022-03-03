import getRepos from "../../src/repo-lister/get-repos";

const json = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Repos", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedUsername = "foobar";
		await getRepos(expectedUsername);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/users/${expectedUsername}/repos`
		);

		expect(json).toHaveBeenCalled();
	});
});
