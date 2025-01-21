const Location = require('../models/Location');

// Fetch location
exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findOne();
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching location', error: err });
  }
};

// Update location
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findOne();
    location.address = req.body.address;
    location.latitude = req.body.latitude;
    location.longitude = req.body.longitude;
    await location.save();
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ message: 'Error updating location', error: err });
  }
};
