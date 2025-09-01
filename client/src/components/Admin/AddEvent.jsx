import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await api.post('/events', {
        title,
        description,
        date,
        time,
        location,
      });
      toast.success('Event added successfully!');
      // Clear form
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
    } catch (err) {
      toast.error('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Add New Event</h2>
      <form onSubmit={handleAddEvent} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-200">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;