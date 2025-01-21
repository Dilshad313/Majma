const express = require('express');
const router = express.Router();
const prayerController = require('../controllers/prayerController');

// GET all prayer times
router.get('/prayer-times', prayerController.getPrayerTimes);

// POST new prayer time
router.post('/prayer-times', prayerController.addPrayerTime);

module.exports = router;
