import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const MyClasses = () => {
  return (
    <div>
      <h1 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaGraduationCap className="mr-3" /> My Classes
      </h1>
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-200">You are not enrolled in any classes.</p>
      </div>
    </div>
  );
};

export default MyClasses;
