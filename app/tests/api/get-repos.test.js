import { when } from "jest-when";
import getRepos from "../../src/api/get-repos";
import logout from "../../src/api/log-out";

const expectedAccount = "foobar";
const expectedToken = "baz";
const expectedUrl = `https://api.github.com/users/${expectedAccount}/repos`;
const expectedParams = { headers: { Authorization: `token ${expectedToken}` } };
const expectedResponse = () => ["foo", "bar", "baz"];
const naughtyAccount = "beans";
const naughtyToken = "on-toast";
const naughtyUrl = `https://api.github.com/users/${naughtyAccount}/repos`;
const naughtyParams = { headers: { Authorization: `token ${naughtyToken}` } };

global.fetch = jest.fn();

when(global.fetch)
	.calledWith(expectedUrl, expectedParams)
	.mockReturnValue(Promise.resolve({ json: expectedResponse, status: 200 }));

when(global.fetch)
	.calledWith(naughtyUrl, naughtyParams)
	.mockReturnValue(Promise.resolve({ status: 418 }));

jest.mock("../../src/api/log-out");

describe("Get Repos", () => {
	it("Calls fetch with expected URL", async () => {
		const repos = await getRepos(expectedAccount, expectedToken);

		expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(repos).toEqual(expectedResponse());
	});

	it("Handles naughtiness by logging out and redirecting", async () => {
		await getRepos(naughtyAccount, naughtyToken);

		expect(global.fetch).toHaveBeenCalledWith(naughtyUrl, naughtyParams);
		expect(logout).toHaveBeenCalled();
	});
});
