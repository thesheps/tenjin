require("live-server").start({
	file: "index.html",
	open: false,
	port: process.env.NODE_ENV ? 9090 : process.env.PORT,
	root: "src",
});
