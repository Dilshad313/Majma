const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  target: { type: Number, required: true },
  current: { type: Number, required: true },
});

module.exports = mongoose.model('Donation', donationSchema);
