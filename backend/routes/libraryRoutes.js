const express = require('express');
const router = express.Router();
const { 
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook
} = require('../controllers/libraryController');
const { 
  authMiddleware, 
  roleMiddleware 
} = require('../middlewares/authMiddleware');

// Public Routes
router.get('/', getBooks);
router.get('/:id', getBookById);

// Protected Routes
router.post('/borrow/:bookId', authMiddleware, borrowBook);
router.post('/return/:bookId', authMiddleware, returnBook);

// Admin Routes
router.post('/', authMiddleware, roleMiddleware(['admin']), addBook);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateBook);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteBook);

module.exports = router;