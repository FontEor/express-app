const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || '00000000-0000-0000-0000-000000000000';
const EXPIRES_IN = '2d';

// Generate JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
};

// Verify JWT token (async)
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        resolve(null);
      } else {
        resolve(decoded);
      }
    });
  });
};

// Decode token without verification
const decodeToken = (token) => {
  return jwt.decode(token);
};

// Middleware to verify token from request
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const decoded = await verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  req.user = decoded;
  next();
};

module.exports = {
  generateToken,
  verifyToken,
  decodeToken,
  authMiddleware,
};
