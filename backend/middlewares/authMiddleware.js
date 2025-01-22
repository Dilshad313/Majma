const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
