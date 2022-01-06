const server = require('./server.js');
const postManager = require('./postManager.js');

// write the maps of post names and full file paths to the database
postManager.writeMappingDB();
// start the server
server.start();