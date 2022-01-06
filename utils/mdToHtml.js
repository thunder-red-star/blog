// external dependencies:
const Showdown = require('showdown');
const fs = require('fs');
const path = require('path');

const showdown = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  extensions: ['tasklist']
});


