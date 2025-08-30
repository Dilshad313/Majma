const express = require('express');
const router = express.Router();
const { 
  createEvent, 
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');
const { eventValidation } = require('../validations/eventValidation');

// Public Routes
router.get('/', getEvents);
router.get('/:id', getEventById);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin']), eventValidation, createEvent);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateEvent);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteEvent);

module.exports = router;