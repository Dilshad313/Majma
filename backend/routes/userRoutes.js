const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser
} = require('../controllers/userController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');
const { 
  registerValidation, 
  loginValidation 
} = require('../validations/userValidation');

// Public Routes
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, loginUser);

// Protected Routes
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

// Admin Routes
router.get('/', authMiddleware, roleMiddleware(['admin']), getAllUsers);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteUser);

module.exports = router;