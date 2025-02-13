const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    
    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    if (!book.isAvailable) {
      return res.status(400).json({ message: 'Book is currently not available' });
    }

    book.isAvailable = false;
    book.borrowedBy = req.user._id;
    book.borrowedDate = new Date();
    book.dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 days from now
    
    await book.save();
    res.json({ 
      message: 'Book borrowed successfully', 
      dueDate: book.dueDate 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);

    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    if (book.isAvailable) {
      return res.status(400).json({ message: 'Book is already in library' });
    }

    if (!book.borrowedBy.equals(req.user._id)) {
      return res.status(403).json({ message: 'You did not borrow this book' });
    }

    // Reset book status
    book.isAvailable = true;
    book.borrowedBy = null;
    book.borrowedDate = null;
    book.dueDate = null;

    await book.save();

    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchBooks = async (req, res) => {
  try {
    const { query } = req.query;
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { author: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};