// models/Event.js
const mongoose = require('mongoose');
const User = require('./User');

class Event {
    constructor(id, title, description, startDate, endDate, category, organizer) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category = category; // lecture, workshop, community event, etc.
        this.organizer = organizer;
        this.attendees = [];
        this.capacity = null;
        this.location = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.status = 'upcoming';
    }

    static create(title, description, startDate, endDate, category, organizer) {
        return new Event(
            Date.now().toString(),
            title,
            description,
            startDate,
            endDate,
            category,
            organizer
        );
    }

    addAttendee(attendeeId) {
        if (!this.capacity || this.attendees.length < this.capacity) {
            if (!this.attendees.includes(attendeeId)) {
                this.attendees.push(attendeeId);
                this.updatedAt = new Date();
                return true;
            }
        }
        return false;
    }

    removeAttendee(attendeeId) {
        const index = this.attendees.indexOf(attendeeId);
        if (index !== -1) {
            this.attendees.splice(index, 1);
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    setCapacity(capacity) {
        this.capacity = capacity;
        this.updatedAt = new Date();
    }

    setLocation(location) {
        this.location = location;
        this.updatedAt = new Date();
    }

    updateStatus(status) {
        this.status = status;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            category: this.category,
            organizer: this.organizer,
            attendees: this.attendees,
            capacity: this.capacity,
            location: this.location,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Event;