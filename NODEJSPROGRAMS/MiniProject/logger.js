const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'requests.log');

function logRequest(method, url) {
  const log = `${new Date().toISOString()} ${method} ${url}\n`;
  fs.appendFile(logFile, log, () => {});
}

module.exports = logRequest;
