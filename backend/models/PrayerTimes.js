const mongoose = require('mongoose');

const prayerTimesSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  fajr: { type: String, required: true },
  sunrise: { type: String, required: true },
  dhuhr: { type: String, required: true },
  asr: { type: String, required: true },
  maghrib: { type: String, required: true },
  isha: { type: String, required: true },
  announcements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Announcement' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

prayerTimesSchema.methods.setJamahTime = function (prayer, time) {
  this[prayer] = time;
};

prayerTimesSchema.methods.addAnnouncement = function (announcementId) {
  this.announcements.push(announcementId);
};

const PrayerTimes = mongoose.model('PrayerTimes', prayerTimesSchema);
module.exports = PrayerTimes;