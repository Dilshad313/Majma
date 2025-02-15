const express = require('express');
const router = express.Router();
const { 
  createEvent, 
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerForEvent
} = require('../controllers/eventController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getEvents);
router.get('/:id', getEventById);

// Protected Routes
router.post('/register/:eventId', authMiddleware, registerForEvent);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin']), createEvent);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateEvent);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteEvent);

module.exports = router;