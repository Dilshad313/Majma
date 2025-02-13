// models/Announcement.js
const mongoose = require('mongoose');
const User = require('./User'); 

class Announcement {
    constructor(id, title, content, author, targetAudience, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.targetAudience = targetAudience;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isActive = true;
    }

    static create(title, content, author, targetAudience, startDate, endDate) {
        return new Announcement(
            Date.now().toString(),
            title,
            content,
            author,
            targetAudience,
            startDate,
            endDate
        );
    }

    update(updates) {
        Object.keys(updates).forEach(key => {
            if (this.hasOwnProperty(key) && key !== 'id') {
                this[key] = updates[key];
            }
        });
        this.updatedAt = new Date();
        return this;
    }

    deactivate() {
        this.isActive = false;
        this.updatedAt = new Date();
        return this;
    }

    isExpired() {
        return this.endDate && new Date() > new Date(this.endDate);
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            author: this.author,
            targetAudience: this.targetAudience,
            startDate: this.startDate,
            endDate: this.endDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            isActive: this.isActive
        };
    }
}

module.exports = Announcement;