const express = require('express');
const router = express.Router();
const { 
    createDonation, 
    getDonations,
    getUserDonations,
    processDonation,
    generateDonationReport
} = require('../controllers/donationController');
const { 
    authMiddleware, 
    roleMiddleware 
} = require('../middlewares/authMiddleware');

// Protected Routes
router.post('/', authMiddleware, createDonation);
router.get('/user', authMiddleware, getUserDonations);

// Admin Routes
router.get('/', authMiddleware, roleMiddleware(['admin']), getDonations);
router.post('/process/:id', authMiddleware, roleMiddleware(['admin']), processDonation);
router.get('/report', authMiddleware, roleMiddleware(['admin']), generateDonationReport);

module.exports = router;
