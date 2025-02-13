// models/Volunteer.js
const mongoose = require('mongoose');
const User = require('./User');

class Volunteer {
    constructor(id, userId, skills, availability) {
        this.id = id;
        this.userId = userId;
        this.skills = skills;
        this.availability = availability;
        this.assignments = [];
        this.totalHours = 0;
        this.status = 'active';
        this.preferredAreas = [];
        this.emergencyContact = null;
        this.backgroundCheck = {
            completed: false,
            date: null,
            expiryDate: null,
            status: 'pending'
        };
        this.training = {
            completed: [],
            required: [],
            nextDue: null
        };
        this.notes = [];
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static create(userId, skills, availability) {
        return new Volunteer(
            Date.now().toString(),
            userId,
            skills || [],
            availability || {}
        );
    }

    // Skills management
    addSkill(skill) {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
            this.updatedAt = new Date();
        }
        return this;
    }

    removeSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
            this.updatedAt = new Date();
        }
        return this;
    }

    // Availability management
    updateAvailability(newAvailability) {
        this.availability = {
            ...this.availability,
            ...newAvailability
        };
        this.updatedAt = new Date();
        return this;
    }

    // Assignment management
    addAssignment(assignment) {
        this.assignments.push({
            ...assignment,
            status: 'assigned',
            assignedDate: new Date()
        });
        this.updatedAt = new Date();
        return this;
    }

    completeAssignment(assignmentId, hours) {
        const assignment = this.assignments.find(a => a.id === assignmentId);
        if (assignment) {
            assignment.status = 'completed';
            assignment.completedDate = new Date();
            assignment.hoursServed = hours;
            this.totalHours += hours;
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    // Status management
    updateStatus(newStatus) {
        this.status = newStatus;
        this.updatedAt = new Date();
        return this;
    }

    // Background check management
    updateBackgroundCheck(details) {
        this.backgroundCheck = {
            ...this.backgroundCheck,
            ...details,
            date: new Date()
        };
        this.updatedAt = new Date();
        return this;
    }

    // Training management
    addTraining(training) {
        this.training.completed.push({
            ...training,
            completedDate: new Date()
        });
        this.updatedAt = new Date();
        return this;
    }

    setRequiredTraining(trainings) {
        this.training.required = trainings;
        this.updatedAt = new Date();
        return this;
    }

    // Emergency contact management
    setEmergencyContact(contact) {
        this.emergencyContact = {
            ...contact,
            lastUpdated: new Date()
        };
        this.updatedAt = new Date();
        return this;
    }

    // Preferred areas management
    addPreferredArea(area) {
        if (!this.preferredAreas.includes(area)) {
            this.preferredAreas.push(area);
            this.updatedAt = new Date();
        }
        return this;
    }

    removePreferredArea(area) {
        const index = this.preferredAreas.indexOf(area);
        if (index !== -1) {
            this.preferredAreas.splice(index, 1);
            this.updatedAt = new Date();
        }
        return this;
    }

    // Notes management
    addNote(note) {
        this.notes.push({
            content: note,
            date: new Date(),
            id: Date.now().toString()
        });
        this.updatedAt = new Date();
        return this;
    }

    // Statistics and reporting
    getVolunteerStats() {
        return {
            totalHours: this.totalHours,
            completedAssignments: this.assignments.filter(a => a.status === 'completed').length,
            activeAssignments: this.assignments.filter(a => a.status === 'assigned').length,
            skillsCount: this.skills.length,
            trainingCompleted: this.training.completed.length,
            trainingPending: this.training.required.length - this.training.completed.length
        };
    }

    // Validation methods
    isEligibleForAssignment() {
        return (
            this.status === 'active' &&
            this.backgroundCheck.completed &&
            new Date() < new Date(this.backgroundCheck.expiryDate)
        );
    }

    hasRequiredTraining(requiredTraining) {
        return this.training.completed.some(t => t.name === requiredTraining);
    }

    toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            skills: this.skills,
            availability: this.availability,
            assignments: this.assignments,
            totalHours: this.totalHours,
            status: this.status,
            preferredAreas: this.preferredAreas,
            emergencyContact: this.emergencyContact,
            backgroundCheck: this.backgroundCheck,
            training: this.training,
            notes: this.notes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Volunteer;