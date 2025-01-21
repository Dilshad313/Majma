const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// GET current donation progress
router.get('/donation-progress', donationController.getDonationProgress);

// POST update donation progress
router.post('/update-donation', donationController.updateDonation);

module.exports = router;
