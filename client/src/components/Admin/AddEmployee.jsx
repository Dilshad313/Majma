import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('employee'); // Default role

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        role,
      });
      toast.success('Employee added successfully!');
      // Clear form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setRole('employee');
    } catch (err) {
      toast.error('Failed to add employee. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Add New Employee</h2>
      <form onSubmit={handleAddEmployee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">First Name</label>
          </div>
          <div className="relative">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">Last Name</label>
          </div>
        </div>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">Email</label>
        </div>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">Password</label>
        </div>
        <div className="relative">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">Phone Number</label>
        </div>
        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
          <label className="absolute left-4 -top-3.5 text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-800 px-1">Role</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
