// models/FuneralService.js
const mongoose = require('mongoose');
const User = require('./User');

const funeralServiceSchema = new mongoose.Schema({
  deceasedName: { type: String, required: true },
  dateOfDeath: { type: Date, required: true },
  familyContact: { type: String, required: true },
  serviceDate: { type: Date, required: true },
  imam: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

funeralServiceSchema.methods.assignImam = function (imamId) {
  this.imam = imamId;
};

const FuneralService = mongoose.model('FuneralService', funeralServiceSchema);
module.exports = FuneralService;