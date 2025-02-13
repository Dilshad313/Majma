const express = require('express');
const router = express.Router();
const { 
  getPrayerTimes, 
  updatePrayerTimes,
  getPrayerTimesForLocation
} = require('../controllers/prayerTimesController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getPrayerTimes);
router.get('/location', getPrayerTimesForLocation);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin', 'imam']), updatePrayerTimes);

module.exports = router;