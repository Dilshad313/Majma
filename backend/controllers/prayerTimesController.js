const PrayerTimes = require('../models/PrayerTimes');
const axios = require('axios');

exports.getPrayerTimes = async (req, res) => {
  try {
    const today = new Date();
    const prayerTimes = await PrayerTimes.findOne({
      date: {
        $gte: today.setHours(0,0,0,0),
        $lt: today.setHours(23,59,59,999)
      }
    });

    if (!prayerTimes) {
      return res.status(404).json({ message: 'Prayer times not found for today' });
    }

    res.json(prayerTimes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPrayerTimesForLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    
    const response = await axios.get(`https://api.aladhan.com/v1/calendar`, {
      params: {
        latitude,
        longitude,
        method: 2, // Islamic Society of North America
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
      }
    });

    const todaysPrayerTimes = response.data.data.find(
      day => new Date(day.date.gregorian.date).toDateString() === new Date().toDateString()
    );

    res.json({
      fajr: todaysPrayerTimes.timings.Fajr,
      sunrise: todaysPrayerTimes.timings.Sunrise,
      dhuhr: todaysPrayerTimes.timings.Dhuhr,
      asr: todaysPrayerTimes.timings.Asr,
      maghrib: todaysPrayerTimes.timings.Maghrib,
      isha: todaysPrayerTimes.timings.Isha
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePrayerTimes = async (req, res) => {
  try {
    const { date, prayerTimes, location } = req.body;

    const existingPrayerTimes = await PrayerTimes.findOneAndUpdate(
      { date },
      { 
        fajr: prayerTimes.fajr,
        sunrise: prayerTimes.sunrise,
        dhuhr: prayerTimes.dhuhr,
        asr: prayerTimes.asr,
        maghrib: prayerTimes.maghrib,
        isha: prayerTimes.isha,
        location
      },
      { upsert: true, new: true }
    );

    res.json(existingPrayerTimes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};