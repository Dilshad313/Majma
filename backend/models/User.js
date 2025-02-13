// models/User.js
const mongoose = require('mongoose');

class User {
  constructor(id, firstName, lastName, email, phoneNumber, role) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.role = role; // admin, member, volunteer, imam
      this.password = null;
      this.membershipStatus = 'active';
      this.joinDate = new Date();
      this.lastLogin = null;
      this.preferences = {};
      this.createdAt = new Date();
      this.updatedAt = new Date();
  }

  static create(firstName, lastName, email, phoneNumber, role) {
      return new User(
          Date.now().toString(),
          firstName,
          lastName,
          email,
          phoneNumber,
          role
      );
  }

  setPassword(hashedPassword) {
      this.password = hashedPassword;
      this.updatedAt = new Date();
  }

  updateProfile(updates) {
      Object.keys(updates).forEach(key => {
          if (this.hasOwnProperty(key) && key !== 'id' && key !== 'password') {
              this[key] = updates[key];
          }
      });
      this.updatedAt = new Date();
  }

  updateMembershipStatus(status) {
      this.membershipStatus = status;
      this.updatedAt = new Date();
  }

  setPreference(key, value) {
      this.preferences[key] = value;
      this.updatedAt = new Date();
  }

  recordLogin() {
      this.lastLogin = new Date();
      this.updatedAt = new Date();
  }

  getFullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  toJSON() {
      return {
          id: this.id,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          role: this.role,
          membershipStatus: this.membershipStatus,
          joinDate: this.joinDate,
          lastLogin: this.lastLogin,
          preferences: this.preferences,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      };
  }
}

module.exports = User;