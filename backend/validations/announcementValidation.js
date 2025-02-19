const { body } = require('express-validator');

exports.announcementValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('targetAudience').notEmpty().withMessage('Target audience is required'),
  body('startDate').isDate().withMessage('Start date is required'),
  body('endDate').isDate().withMessage('End date is required')
];