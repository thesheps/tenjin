module.exports = {
	server: { command: "node server.js" },
	launch: {
		args: ["--disable-web-security"],
		headless: true, // false
		// executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	},
};
