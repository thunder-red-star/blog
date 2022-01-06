const postToObject = require('./postData.js');
const mdToHtml = require('./mdToHtml.js');
const fs = require('fs');

let brandColor = "#abcdef";

function readPartials () {
    let partialFiles = fs.readdirSync('./partials');
    let partials = {};
    partialFiles.forEach((file) => {
        partials[file.split('.')[0]] = fs.readFileSync(`./partials/${file}`, 'utf8');
    })
    return partials;
}

function makeOGmetaTags (content) {
    return "<meta property=\"og:title\" content=\"" + content.meta.title + "\" />" + "<meta property=\"og:description\" content=\"" + content.meta.description + "\" />" + "<meta property=\"article:author\" content=\"" + content.meta.author + "\" />" + "<meta property=\"theme-color\" content=\"" + brandColor + "\" />"
}

function format (postURL) {
    let postObj = postToObject(postURL);
    let postHtml = mdToHtml(postObj.content);

    let Partials = readPartials();

    return Partials.header + makeOGmetaTags(postObj) + Partials.header2 + postHtml + Partials.themetoggle + Partials.footer;
}

module.exports = format;