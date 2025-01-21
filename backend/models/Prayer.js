const mongoose = require('mongoose');

const prayerSchema = new mongoose.Schema({
  time: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('Prayer', prayerSchema);
