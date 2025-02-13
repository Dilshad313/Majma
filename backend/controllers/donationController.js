const Donation = require('../models/Donation');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createDonation = async (req, res) => {
    try {
        const { amount, purpose } = req.body;

        // Create Stripe payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
            payment_method_types: ['card']
        });

        const donation = new Donation({
            user: req.user._id,
            amount,
            purpose,
            paymentIntentId: paymentIntent.id
        });

        await donation.save();

        res.status(201).json({
            donation,
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUserDonations = async (req, res) => {
    try {
        const donations = await Donation.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDonations = async (req, res) => {
    try {
        const donations = await Donation.find().populate('user', 'firstName lastName email').sort({ createdAt: -1 });
        res.json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.processDonation = async (req, res) => {
    try {
        const donation = await Donation.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(donation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.generateDonationReport = async (req, res) => {
    try {
        const donations = await Donation.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
                    totalAmount: { $sum: "$amount" },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);
        res.json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
