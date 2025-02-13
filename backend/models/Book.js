// models/Book.js
const mongoose = require('mongoose');
const User = require('./User'); 

class Book {
    constructor(id, title, author, isbn, category, publishYear, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.publishYear = publishYear;
        this.quantity = quantity;
        this.availableQuantity = quantity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.borrowedBy = [];
    }

    static create(title, author, isbn, category, publishYear, quantity) {
        return new Book(
            Date.now().toString(),
            title,
            author,
            isbn,
            category,
            publishYear,
            quantity
        );
    }

    updateStock(quantity) {
        this.quantity = quantity;
        this.availableQuantity = quantity - this.borrowedBy.length;
        this.updatedAt = new Date();
        return this;
    }

    borrow(userId) {
        if (this.availableQuantity > 0) {
            this.borrowedBy.push({
                userId,
                borrowDate: new Date(),
                returnDate: null
            });
            this.availableQuantity--;
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    return(userId) {
        const borrowIndex = this.borrowedBy.findIndex(
            borrow => borrow.userId === userId && !borrow.returnDate
        );
        if (borrowIndex !== -1) {
            this.borrowedBy[borrowIndex].returnDate = new Date();
            this.availableQuantity++;
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            category: this.category,
            publishYear: this.publishYear,
            quantity: this.quantity,
            availableQuantity: this.availableQuantity,
            borrowedBy: this.borrowedBy,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Book;