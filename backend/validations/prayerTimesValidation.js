const { body } = require('express-validator');

exports.prayerTimesValidation = [
  body('date').isDate().withMessage('Date is required'),
  body('fajr').notEmpty().withMessage('Fajr time is required'),
  body('sunrise').notEmpty().withMessage('Sunrise time is required'),
  body('dhuhr').notEmpty().withMessage('Dhuhr time is required'),
  body('asr').notEmpty().withMessage('Asr time is required'),
  body('maghrib').notEmpty().withMessage('Maghrib time is required'),
  body('isha').notEmpty().withMessage('Isha time is required')
];