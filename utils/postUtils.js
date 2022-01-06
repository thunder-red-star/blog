// external imports
const fs = require('fs');
const path = require('path');

function getPostNames () {
    let posts = fs.readdirSync('./posts').filter(file => file.endsWith('.post'));

    return posts.map(post => {
        return post.replace('.post', '');
    });
}

function getPostFilepaths () {
    let posts = fs.readdirSync('./posts').filter(file => file.endsWith('.post'));

    let postDir = path.resolve('./posts');

    return posts.map(post => {
        return path.resolve(postDir, post);
    });
}

module.exports = {
    getPostNames, getPostFilepaths
}