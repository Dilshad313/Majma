const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    purpose: { type: String, required: true },
    paymentIntentId: { type: String, required: true },
    status: { type: String, default: 'completed' },
    createdAt: { type: Date, default: Date.now }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
