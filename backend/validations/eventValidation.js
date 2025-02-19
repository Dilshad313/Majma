const { body } = require('express-validator');

exports.eventValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('startDate').isDate().withMessage('Start date is required'),
  body('endDate').isDate().withMessage('End date is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('organizer').notEmpty().withMessage('Organizer ID is required')
];