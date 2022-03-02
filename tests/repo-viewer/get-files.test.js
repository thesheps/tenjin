import getFiles from "../../src/repo-viewer/get-files";

const expectedFiles = [{ path: "foo" }];
const json = jest.fn().mockReturnValue({ tree: expectedFiles });
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Files", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedUsername = "foobar";
		const expectedRepo = "baz";
		const files = await getFiles(expectedUsername, expectedRepo);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedUsername}/${expectedRepo}/git/trees/main?recursive=1`
		);

		expect(files).toBe(expectedFiles);
	});
});
