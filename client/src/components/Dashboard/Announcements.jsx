import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

const Announcements = () => {
  return (
    <div>
      <h1 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaBullhorn className="mr-3" /> Announcements
      </h1>
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-200">There are no new announcements.</p>
      </div>
    </div>
  );
};

export default Announcements;
