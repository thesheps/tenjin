const axios = require("axios");
const { when } = require("jest-when");
const { auth } = require("../src/handler");

process.env.CLIENT_ID = "CLIENT_ID";
process.env.CLIENT_SECRET = "CLIENT_SECRET";

const testEvent = { queryStringParameters: { code: "foobarbaz" } };
const testNaughtyEvent = { queryStringParameters: { code: "iamverynaughty" } };

const expectedUrl = "https://github.com/login/oauth/access_token?";
const expectedParams = {
	params: {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: testEvent.queryStringParameters.code,
	},
};

const expectedOutput = {
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
	},
	body: '{"accessToken":"qux"}',
	statusCode: 200,
};

const naughtyParams = {
	params: {
		...expectedParams.params,
		code: testNaughtyEvent.queryStringParameters.code,
	},
};

const naughtyOutput = {
	...expectedOutput,
	body: "Couldn't obtain access token!",
	statusCode: 403,
};

when(axios.get)
	.calledWith(expectedUrl, expectedParams)
	.mockReturnValue(Promise.resolve({ data: "accessToken=qux" }));

when(axios.get)
	.calledWith(expectedUrl, naughtyParams)
	.mockReturnValue(Promise.resolve("Badly formatted code string! Stop it!!"));

jest.mock("axios");

describe("Auth Handler", () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it("Returns a valid access token using the correct client details", async () => {
		const output = await auth(testEvent);

		expect(axios.get).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(output).toEqual(expectedOutput);
	});

	it("Returns a well-formed error when the gihub api call can't be made", async () => {
		const output = await auth(testNaughtyEvent);

		expect(axios.get).toHaveBeenCalledWith(expectedUrl, naughtyParams);
		expect(output).toEqual(naughtyOutput);
	});
});
