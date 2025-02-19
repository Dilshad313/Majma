const mongoose = require('mongoose');
const User = require('./User');

const volunteerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skills: [{ type: String, required: true }],
  availability: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

volunteerSchema.methods.addSkill = function (skill) {
  this.skills.push(skill);
};

volunteerSchema.methods.removeSkill = function (skill) {
  this.skills = this.skills.filter(s => s !== skill);
};

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;