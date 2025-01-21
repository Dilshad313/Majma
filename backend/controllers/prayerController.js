const Prayer = require('../models/Prayer');

// Fetch prayer times
exports.getPrayerTimes = async (req, res) => {
  try {
    const prayerTimes = await Prayer.find();
    res.status(200).json(prayerTimes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching prayer times', error: err });
  }
};

// Add new prayer time
exports.addPrayerTime = async (req, res) => {
  try {
    const newPrayer = new Prayer(req.body);
    await newPrayer.save();
    res.status(201).json(newPrayer);
  } catch (err) {
    res.status(500).json({ message: 'Error adding prayer time', error: err });
  }
};
