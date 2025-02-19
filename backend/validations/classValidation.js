const { body } = require('express-validator');

exports.classValidation = [
  body('name').notEmpty().withMessage('Class name is required'),
  body('grade').notEmpty().withMessage('Grade is required'),
  body('section').notEmpty().withMessage('Section is required'),
  body('teacher').notEmpty().withMessage('Teacher ID is required'),
  body('schedule').notEmpty().withMessage('Schedule is required'),
  body('capacity').isInt({ min: 1 }).withMessage('Capacity is required')
];