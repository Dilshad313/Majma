const { body } = require('express-validator');

exports.bookValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('isbn').notEmpty().withMessage('ISBN is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('publishYear').isInt({ min: 1000, max: new Date().getFullYear() }).withMessage('Publish year is required'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity is required')
];