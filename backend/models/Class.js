const mongoose = require('mongoose');
const User = require('./User');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  section: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  schedule: { type: String, required: true },
  capacity: { type: Number, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

classSchema.methods.addStudent = function (studentId) {
  if (this.students.length < this.capacity) {
    this.students.push(studentId);
  } else {
    throw new Error('Class is full');
  }
};

classSchema.methods.removeStudent = function (studentId) {
  this.students = this.students.filter(id => id.toString() !== studentId.toString());
};

const Class = mongoose.model('Class', classSchema);
module.exports = Class;