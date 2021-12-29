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
		try {
			let endpointName = endpoint.split(".").slice(0, endpoint.split(".").length - 1).join(".");
			app.get('/api/' + endpointName, (req, res) => {
				return data.get(req, res)
			})
			term.green("[INFO] GET endpoint added: ").bold.brightGreen(endpointName + "\n")
		} catch (err) {
			term.red("[WARN] GET endpoint addition failed: ").bold.red(endpointName + "\n")
			term.red("[WARN] " + err + "\n")
		}
	}
	if (data.post) {
		try {
			let endpointName = endpoint.split(".").slice(0, endpoint.split(".").length - 1).join(".");
			app.post('/api/' + endpointName, (req, res) => {
				return data.post(req, res)
			})
			term.green("[INFO] POST endpoint added: ").bold.brightGreen(endpointName + "\n")
		} catch (err) {
			term.red("[WARN] POST endpoint addition failed: ").bold.red(endpointName + "\n")
			term.red("[WARN] " + err + "\n")
		}
	}
}

app.listen(config.port, null, null, () => {
	term.brightGreen.bold("[INFO] Blog started on port " + config.port)
});