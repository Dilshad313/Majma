const PrayerTimes = require('../models/PrayerTimes');
const axios = require('axios');

exports.getPrayerTimes = async (req, res) => {
  try {
    const today = new Date();
    const prayerTimes = await PrayerTimes.findOne({ date: today.toISOString().split('T')[0] });
    if (!prayerTimes) {
      return res.status(404).json({ message: 'Prayer times not found for today' });
    }
    res.json(prayerTimes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getPrayerTimesForLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const response = await axios.get(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updatePrayerTimes = async (req, res) => {
  try {
    const { date, fajr, sunrise, dhuhr, asr, maghrib, isha } = req.body;
    let prayerTimes = await PrayerTimes.findOne({ date });
    if (!prayerTimes) {
      prayerTimes = new PrayerTimes({ date, fajr, sunrise, dhuhr, asr, maghrib, isha });
    } else {
      prayerTimes.fajr = fajr;
      prayerTimes.sunrise = sunrise;
      prayerTimes.dhuhr = dhuhr;
      prayerTimes.asr = asr;
      prayerTimes.maghrib = maghrib;
      prayerTimes.isha = isha;
    }
    await prayerTimes.save();
    res.json(prayerTimes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};