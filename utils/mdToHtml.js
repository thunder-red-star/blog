// external dependencies:
const Showdown = require('showdown');
const tasklist = import('tasklist');
const fs = require('fs');
const path = require('path');

const showdown = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

module.exports = function mdToHtml(mdFilePath, htmlFilePath) {
  const md = fs.readFileSync(mdFilePath, 'utf8');
  const html = showdown.makeHtml(md);
  return html
};

