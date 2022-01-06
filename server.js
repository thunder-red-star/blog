// this is the file that hosts the express server for the blog

// external imports
const express = require('express');
const fs = require('fs');
const path = require('path');

// internal imports
const config = require('./config');
const mdToHtml = require('./utils/mdToHtml');
const app = express();
const format = require('./utils/format');

function start () {
    // get and parse the mapping file
    const postMaps = JSON.parse(fs.readFileSync("./db/pages.json", {encoding: 'utf8'}));
    // create GET routes for all the pages in the map file, such that if a request is made to /posts/pageName, the marked up html is returned
    for (let page in postMaps) {
        app.get('/posts/' + page, (req, res) => {
            console.log(`[GET] /posts/${page}`);
            res.send(format(postMaps[page]));
        });
    }

    // start the server on the port specified in the config file
    app.listen(config.port, () => {
        console.log(`Server started on port ${config.port}`);
    });
}

module.exports = {
    start: start
}

