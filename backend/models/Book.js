// models/Book.js
const mongoose = require('mongoose');
const User = require('./User'); 

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  category: { type: String, required: true },
  publishYear: { type: Number, required: true },
  quantity: { type: Number, required: true },
  borrowedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

bookSchema.methods.borrow = function (userId) {
  this.borrowedBy.push(userId);
};

bookSchema.methods.return = function (userId) {
  this.borrowedBy = this.borrowedBy.filter(id => id.toString() !== userId.toString());
};

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;