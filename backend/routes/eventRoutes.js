const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/events', eventController.getEvents);

// POST new event
router.post('/events', eventController.addEvent);

module.exports = router;
