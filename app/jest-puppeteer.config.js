module.exports = {
	server: { command: "node server.js" },
	launch: {
		headless: true,
		args: ["--disable-web-security"],
	},
	// launch: {
	// 	headless: "false",
	// 	executablePath:
	// 		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	// 	args: [
	// 		"--disable-web-security",
	// 	],
	// },
};
