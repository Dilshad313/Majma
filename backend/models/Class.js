// models/Class.js
const mongoose = require('mongoose');
const User = require('./User');

class Class {
    constructor(id, name, grade, section, teacher, schedule, capacity) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.section = section;
        this.teacher = teacher;
        this.schedule = schedule;
        this.capacity = capacity;
        this.students = [];
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isActive = true;
    }

    static create(name, grade, section, teacher, schedule, capacity) {
        return new Class(
            Date.now().toString(),
            name,
            grade,
            section,
            teacher,
            schedule,
            capacity
        );
    }

    addStudent(student) {
        if (this.students.length < this.capacity && !this.students.includes(student.id)) {
            this.students.push(student.id);
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    removeStudent(studentId) {
        const index = this.students.indexOf(studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            this.updatedAt = new Date();
            return true;
        }
        return false;
    }

    updateSchedule(newSchedule) {
        this.schedule = newSchedule;
        this.updatedAt = new Date();
        return this;
    }

    updateTeacher(newTeacher) {
        this.teacher = newTeacher;
        this.updatedAt = new Date();
        return this;
    }

    getStudentCount() {
        return this.students.length;
    }

    hasAvailableSeats() {
        return this.students.length < this.capacity;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            grade: this.grade,
            section: this.section,
            teacher: this.teacher,
            schedule: this.schedule,
            capacity: this.capacity,
            students: this.students,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            isActive: this.isActive
        };
    }
}

module.exports = Class;