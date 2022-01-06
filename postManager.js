const postUtils = require('./utils/postUtils');
const fs = require('fs');
const path = require('path');

function writeMappingDB () {
    let mappingDB = {};

    const posts = postUtils.getPostNames();
    const postFiles = postUtils.getPostFilepaths();

    posts.forEach((element, idx) => {
        mappingDB[element] = postFiles[idx];
    });

    fs.writeFileSync('./db/pages.json', JSON.stringify(mappingDB));
}

module.exports = {
    writeMappingDB
};