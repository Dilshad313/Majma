import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaGraduationCap, FaDonate, FaBullhorn } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Dashboard</h2>
      </div>
      <nav className="mt-5">
        <Link to="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaUser className="mr-3" />
          <span className="mx-4 font-medium">Profile</span>
        </Link>
        <Link to="/dashboard/events" className="flex items-center px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaCalendarAlt className="mr-3" />
          <span className="mx-4 font-medium">My Events</span>
        </Link>
        <Link to="/dashboard/classes" className="flex items-center px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaGraduationCap className="mr-3" />
          <span className="mx-4 font-medium">My Classes</span>
        </Link>
        <Link to="/dashboard/donations" className="flex items-center px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaDonate className="mr-3" />
          <span className="mx-4 font-medium">My Donations</span>
        </Link>
        <Link to="/dashboard/announcements" className="flex items-center px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaBullhorn className="mr-3" />
          <span className="mx-4 font-medium">Announcements</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
