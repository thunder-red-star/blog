// this is the file that hosts the express server for the blog

// external imports
const express = require('express');
const fs = require('fs');
const path = require('path');

// internal imports
const config = require('./config');
const mdToHtml = require('./utils/mdToHtml');
const postMaps = require('./db/pages.json');

const app = express();


function start () {
    // create GET routes for all the pages in the map file, such that if a request is made to /posts/pageName, the marked up html is returned
    for (let page in postMaps) {
        app.get('/posts/' + page, (req, res) => {
            res.send(mdToHtml(postMaps[page]));
        });
    }
}

module.exports = {
    start: start
}

