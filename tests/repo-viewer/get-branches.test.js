import getBranches from "../../src/repo-viewer/get-branches";

const expectedBranches = [{ name: "foo" }];
const json = jest.fn().mockReturnValue(expectedBranches);
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Branches", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedUsername = "foobar";
		const expectedRepo = "baz";
		const branches = await getBranches(expectedUsername, expectedRepo);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedUsername}/${expectedRepo}/branches`
		);

		expect(branches).toBe(expectedBranches);
	});
});
