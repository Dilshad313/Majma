const Donation = require('../models/Donation');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createDonation = async (req, res) => {
  try {
    const { amount, purpose } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { purpose }
    });

    const donation = new Donation({
      user: req.user._id,
      amount,
      purpose,
      paymentIntentId: paymentIntent.id
    });

    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getUserDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user._id });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.processDonation = async (req, res) => {
  try {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      const donation = await Donation.findOneAndUpdate(
        { paymentIntentId },
        { status: 'completed' },
        { new: true }
      );
      res.json(donation);
    } else {
      res.status(400).json({ message: 'Payment not completed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.generateDonationReport = async (req, res) => {
  try {
    const donations = await Donation.find();
    // Generate report logic here
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};