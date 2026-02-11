const jwt = require('jsonwebtoken');

const SECRET = 'mysecretkey';

function generateToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    SECRET,
    { expiresIn: '1h' }
  );
}

function verifyToken(req, res) {
  const header = req.headers['authorization'];

  if (!header) {
    res.writeHead(401);
    res.end('Token missing');
    return null;
  }

  const token = header.split(' ')[1];

  try {
    return jwt.verify(token, SECRET);
  } catch {
    res.writeHead(403);
    res.end('Invalid token');
    return null;
  }
}

module.exports = { generateToken, verifyToken };
