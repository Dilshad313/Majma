// models/Nikah.js
const mongoose = require('mongoose');
const User = require('./User');

const nikahSchema = new mongoose.Schema({
  groomName: { type: String, required: true },
  brideName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  imam: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  witnesses: [{ type: String }],
  mahr: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

nikahSchema.methods.addWitness = function (witnessInfo) {
  this.witnesses.push(witnessInfo);
};

nikahSchema.methods.setMahr = function (mahrDetails) {
  this.mahr = mahrDetails;
};

const Nikah = mongoose.model('Nikah', nikahSchema);
module.exports = Nikah;