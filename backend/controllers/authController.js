const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = 'your_secret_key';

// Signup Controller
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ success: true, message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error signing up', error });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, SECRET_KEY);
    res.json({ success: true, message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in', error });
  }
};
