const express = require('express');
const router = express.Router();
const { 
  createClass, 
  getClasses,
  getClassById,
  updateClass,
  deleteClass,
  registerForClass
} = require('../controllers/classController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getClasses);
router.get('/:id', getClassById);

// Protected Routes
router.post('/register/:classId', authMiddleware, registerForClass);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin', 'imam']), createClass);
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'imam']), updateClass);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'imam']), deleteClass);

module.exports = router;