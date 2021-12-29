const url = require("url");
const path = require("path");
const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const fs = require("fs");
const term = require("terminal-kit").terminal;
const bodyParser = require("body-parser")
const app = express();

// set this differently in your secrets, you'll need it to access the API!
const password = process.env.PASSWORD;


const config = require("./config/config.json")

// for ejs rendering, fun!
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

// serve static files like css/js/junk
app.use(express.static(__dirname + '/static'));

// for api usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// TODO: Clean this
const apiFiles = fs.readdirSync("api").filter(file => file.split(".")[file.split(".").length - 1] === "js")

// make endpoints available 
for (endpoint of apiFiles) {
	let data = require('./api/' + endpoint)
	if (data.get) {
		app.get(endpoint.split(".").slice(0, endpoint.split(".").length - 1), (req, res) => {
			return data.get(req, res)
		})
	}
	if (data.post) {
		app.post(endpoint.split(".").slice(0, endpoint.split(".").length - 1), (req, res) => {
			return data.post(req, res)
		})
	}
}

app.listen(config.port, null, null, () => {
	term.green("Blog started on port " + config.port)
});