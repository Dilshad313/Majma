const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// GET location
router.get('/location', locationController.getLocation);

// POST update location
router.post('/update-location', locationController.updateLocation);

module.exports = router;
