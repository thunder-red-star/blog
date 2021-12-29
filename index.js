const url = require("url");
const path = require("path");
const express = require("express");
const session = require("express-session");
const ejs = require("ejs");
const fs = require("fs");
const term = require("terminal-kit").terminal;
const bodyParser = require("body-parser")
const app = express();

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

const apiFiles = fs.readdirSync("api")

for (endpoint of apiFiles) {
	
}

app.listen(config.port, null, null, () => {
	term.green("Blog started on port " + config.port)
});