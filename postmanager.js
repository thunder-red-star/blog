// external imports
const fs = require('fs');
const path = require('path');

function getPostNames () {
    let posts = fs.readdirSync('./posts').filter(file => file.endsWith('.post'));

    return posts.map(post => {
        return post.replace('.post', '');
    });
}


module.exports = {
    getPosts
}