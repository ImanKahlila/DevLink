// NODEJS IMPORTS
import https from "https";
import fs from "fs/promises";
import path from "path";

// EXPRESS IMPORTS
import express from "express";
import cors from "cors";

// CONSTANTS
const PORT = process.env.PORT || 5000;
const __dirname = import.meta.dirname;
const __prevDir = path.join(__dirname, "..");
const __frontendDir = path.join(__prevDir, "/frontend");
const app = express();
const server = https.createServer();

// SERVERS
app.listen(3000, (err) => {
	console.log("Express running on port 3000");
	if (err) {
		if (Error.isError(err)) {
			console.error(err.message);
		} else {
			console.error(Error(err).message);
		};
	};
});
server.listen(PORT, () => {
	console.log(`NodeJS running on port ${PORT}`);
});

// MIDDLEWARE
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
})
app.use(cors(), (req, res, next) => {
	next();
});
	// PUBLIC DIRECTORY
app.use(express.static(path.join(__frontendDir, "/public")), (req, res, next) => {
	next();
});
app.use(express.json(), (req, res, next) => {
	next();
});

// GET
app.get("/", (req, res, next) => {
	res.sendFile(path.join(__frontendDir, "/index.html"), err => {
		if (err) {
			if (Error.isError(err)) {
				next(err);
			} else {
				next(Error(err));
			};
		};
	});
});






app.get("/login", (req, res) => {
	
  //logic goes here
});

app.get ("/feed", (req, res) => {

	//logic goes here
});

app.get("/profile", (req, res) => {

	//logic goes here
});
