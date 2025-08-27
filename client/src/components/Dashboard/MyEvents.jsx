import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const MyEvents = () => {
  return (
    <div>
      <h1 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaCalendarAlt className="mr-3" /> My Events
      </h1>
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-200">You have no upcoming events.</p>
      </div>
    </div>
  );
};

export default MyEvents;
