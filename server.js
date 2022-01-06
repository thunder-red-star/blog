// this is the file that hosts the express server for the blog

// external imports
const express = require('express');
const showdown = require('showdown');
const fs = require('fs');
const path = require('path');

// internal imports
const config = require('./config');
const mdToHtml = require('./utils/mdToHtml');

const app = express();

