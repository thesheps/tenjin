import { getFiles } from "../../src/api/index";
import { when } from "jest-when";
import logout from "../../src/api/log-out";

const expectedFiles = [
	{ path: "foo", url: "path-to-foo" },
	{ path: "bar", url: "path-to-bar" },
	{ path: "baz.md", url: "path-to-baz.md" },
];

const expectedToken = "qux";
const expectedAccount = "foobar";
const expectedRepo = "baz";
const expectedBranch = "baz";
const expectedUrl = `https://api.github.com/repos/${expectedAccount}/${expectedRepo}/git/trees/${expectedBranch}?recursive=1`;
const expectedParams = { headers: { Authorization: `token ${expectedToken}` } };
const expectedResponse = () => ({ tree: expectedFiles });
const naughtyAccount = "beans";
const naughtyRepo = "on";
const naughtyBranch = "burnt";
const naughtyToken = "toast";
const naughtyUrl = `https://api.github.com/repos/${naughtyAccount}/${naughtyRepo}/git/trees/${naughtyBranch}?recursive=1`;
const naughtyParams = { headers: { Authorization: `token ${naughtyToken}` } };

global.fetch = jest.fn();

jest.mock("../../src/api/log-out");

when(global.fetch)
	.calledWith(expectedUrl, expectedParams)
	.mockReturnValue(Promise.resolve({ json: expectedResponse, status: 200 }));

when(global.fetch)
	.calledWith(naughtyUrl, naughtyParams)
	.mockReturnValue(Promise.resolve({ status: 418 }));

describe("Get Files", () => {
	it("Filters out any non-markdown files", async () => {
		let files = await getFiles(
			expectedAccount,
			expectedRepo,
			expectedBranch,
			expectedToken
		);

		expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(files).toEqual([{ path: "baz.md", url: "path-to-baz.md" }]);
	});

	it("Handles naughtiness by logging out and redirecting", async () => {
		await getFiles(naughtyAccount, naughtyRepo, naughtyBranch, naughtyToken);

		expect(global.fetch).toHaveBeenCalledWith(naughtyUrl, naughtyParams);
		expect(logout).toHaveBeenCalled();
	});
});
