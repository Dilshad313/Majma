import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const { user } = useOutletContext();

  return (
    <div>
      <h1 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaUser className="mr-3" /> Profile
      </h1>
      <div className="mt-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600 dark:text-gray-200">{user.email}</p>
          <p className="text-gray-600 dark:text-gray-200">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
