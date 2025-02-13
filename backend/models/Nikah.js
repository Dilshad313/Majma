// models/Nikah.js
const mongoose = require('mongoose');
const User = require('./User');

class Nikah {
    constructor(id, groomName, brideName, date, time, imamId) {
        this.id = id;
        this.groomName = groomName;
        this.brideName = brideName;
        this.date = date;
        this.time = time;
        this.imamId = imamId;
        this.witnesses = [];
        this.location = '';
        this.mahr = '';
        this.status = 'scheduled';
        this.documents = [];
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static create(groomName, brideName, date, time, imamId) {
        return new Nikah(
            Date.now().toString(),
            groomName,
            brideName,
            date,
            time,
            imamId
        );
    }

    addWitness(witnessInfo) {
        if (this.witnesses.length < 2) {
            this.witnesses.push(witnessInfo);
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    setMahr(mahrDetails) {
        this.mahr = mahrDetails;
        this.updatedAt = new Date();
    }

    setLocation(location) {
        this.location = location;
        this.updatedAt = new Date();
    }

    addDocument(documentInfo) {
        this.documents.push({
            ...documentInfo,
            uploadDate: new Date()
        });
        this.updatedAt = new Date();
    }

    updateStatus(status) {
        this.status = status;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            groomName: this.groomName,
            brideName: this.brideName,
            date: this.date,
            time: this.time,
            imamId: this.imamId,
            witnesses: this.witnesses,
            location: this.location,
            mahr: this.mahr,
            status: this.status,
            documents: this.documents,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Nikah;