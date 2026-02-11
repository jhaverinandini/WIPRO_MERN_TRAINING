const http = require('http');
const router = require('./router');
const logRequest = require('./logger');

const server = http.createServer((req, res) => {
  logRequest(req.method, req.url);
  router(req, res);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
