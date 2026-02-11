// require Used to import modules, JSON, and local files. so here we are impc

const express = require('express');

const app = express();

// Start the server on port 3000

app.listen(3000, () => {

console.log('Express Server running at http://localhost:3000');

});