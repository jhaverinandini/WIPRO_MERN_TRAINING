const fs = require('fs');
const { generateToken, verifyToken } = require('./auth');

function router(req, res) {

  // 🟢 LOGIN
  if (req.url === '/login' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => body += chunk);

    req.on('end', () => {
      const { username, password } = JSON.parse(body);
      const users = JSON.parse(fs.readFileSync('./users.json'));

      const user = users.find(
        u => u.username === username && u.password === password
      );

      if (!user) {
        res.writeHead(401);
        return res.end('Invalid credentials');
      }

      const token = generateToken(user);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ token }));
    });
  }

  // 🔒 PROTECTED ROUTE
  else if (req.url === '/dashboard' && req.method === 'GET') {
    const user = verifyToken(req, res);
    if (!user) return;

    res.writeHead(200);
    res.end(`Welcome ${user.username}, JWT verified!`);
  }

  else {
    res.writeHead(404);
    res.end('Route not found');
  }
}

module.exports = router;
