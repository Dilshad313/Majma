const express = require('express');
const router = express.Router();
const { 
  createAnnouncement, 
  getAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement
} = require('../controllers/announcementController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getAnnouncements);
router.get('/:id', getAnnouncementById);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin', 'imam']), createAnnouncement);
router.put('/:id', authMiddleware, roleMiddleware(['admin', 'imam']), updateAnnouncement);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'imam']), deleteAnnouncement);

module.exports = router;