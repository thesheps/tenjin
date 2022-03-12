import getRepos from "../../src/repo-lister/get-repos";

const json = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Repos", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		await getRepos(expectedAccount);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/users/${expectedAccount}/repos`
		);

		expect(json).toHaveBeenCalled();
	});
});
