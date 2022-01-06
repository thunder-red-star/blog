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

module.exports = function mdToHtml(md) {
  const html = showdown.makeHtml(md);
  return html
};

