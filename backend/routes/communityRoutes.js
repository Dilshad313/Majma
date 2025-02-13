const express = require('express');
const router = express.Router();
const { 
  registerNikah,
  manageFuneralService,
  registerVolunteer,
  getVolunteers
} = require('../controllers/communityController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Protected Routes
router.post('/nikah', authMiddleware, registerNikah);
router.post('/funeral', authMiddleware, manageFuneralService);
router.post('/volunteer', authMiddleware, registerVolunteer);

// Admin Routes
router.get('/volunteers', authMiddleware, roleMiddleware(['admin']), getVolunteers);

module.exports = router;