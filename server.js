require("live-server").start({
	file: "index.html",
	open: false,
	port: process.env.PORT,
	root: "src",
});
