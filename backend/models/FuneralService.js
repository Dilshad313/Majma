// models/FuneralService.js
const mongoose = require('mongoose');
const User = require('./User');

class FuneralService {
    constructor(id, deceasedName, dateOfDeath, familyContact, serviceDate) {
        this.id = id;
        this.deceasedName = deceasedName;
        this.dateOfDeath = dateOfDeath;
        this.familyContact = familyContact;
        this.serviceDate = serviceDate;
        this.location = '';
        this.imamAssigned = null;
        this.status = 'scheduled';
        this.additionalServices = [];
        this.notes = '';
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static create(deceasedName, dateOfDeath, familyContact, serviceDate) {
        return new FuneralService(
            Date.now().toString(),
            deceasedName,
            dateOfDeath,
            familyContact,
            serviceDate
        );
    }

    assignImam(imamId) {
        this.imamAssigned = imamId;
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

    addService(service) {
        this.additionalServices.push(service);
        this.updatedAt = new Date();
    }

    addNotes(note) {
        this.notes += `${new Date().toISOString()}: ${note}\n`;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            deceasedName: this.deceasedName,
            dateOfDeath: this.dateOfDeath,
            familyContact: this.familyContact,
            serviceDate: this.serviceDate,
            location: this.location,
            imamAssigned: this.imamAssigned,
            status: this.status,
            additionalServices: this.additionalServices,
            notes: this.notes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = FuneralService;