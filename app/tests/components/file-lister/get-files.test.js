import getFiles from "../../../src/components/file-lister/get-files";

const expectedFiles = [
	{ path: "foo", url: "path-to-foo" },
	{ path: "bar", url: "path-to-bar" },
	{ path: "baz.md", url: "path-to-baz.md" },
];
const json = jest.fn().mockReturnValue({ tree: expectedFiles });
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Files", () => {
	const expectedAccount = "foobar";
	const expectedRepo = "baz";
	const expectedBranch = "baz";
	const expectedToken = "qux";

	let files = [];

	beforeAll(async () => {
		files = await getFiles(
			expectedAccount,
			expectedRepo,
			expectedBranch,
			expectedToken
		);
	});

	it("Calls fetch with expected URL", async () => {
		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedAccount}/${expectedRepo}/git/trees/${expectedBranch}?recursive=1`,
			{
				headers: {
					Authorization: `token ${expectedToken}`,
				},
			}
		);
	});

	it("Filters out any non-markdown files", async () => {
		expect(files).toEqual([{ path: "baz.md", url: "path-to-baz.md" }]);
	});
});
