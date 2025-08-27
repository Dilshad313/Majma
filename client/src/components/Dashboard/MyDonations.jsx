import React from 'react';
import { FaDonate } from 'react-icons/fa';

const MyDonations = () => {
  return (
    <div>
      <h1 className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
        <FaDonate className="mr-3" /> My Donations
      </h1>
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-200">You have not made any donations.</p>
      </div>
    </div>
  );
};

export default MyDonations;
