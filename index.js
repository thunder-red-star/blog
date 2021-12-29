const url = require("url");
const path = require("path");
const express = require("express");
const session = require("express-session");
const ejs = require("ejs");

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/assets'));

app.use(bodyParser.urlencoded({
	extended: true
}));