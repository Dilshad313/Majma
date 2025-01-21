const Donation = require('../models/Donation');

// Fetch donation progress
exports.getDonationProgress = async (req, res) => {
  try {
    const donation = await Donation.findOne();
    res.status(200).json(donation);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching donation data', error: err });
  }
};

// Update donation progress
exports.updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findOne();
    donation.current = req.body.current;
    await donation.save();
    res.status(200).json(donation);
  } catch (err) {
    res.status(500).json({ message: 'Error updating donation data', error: err });
  }
};
