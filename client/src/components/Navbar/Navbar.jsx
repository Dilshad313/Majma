import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaBullhorn, FaBook, FaUser, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Majma
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
            <Link to="/events" className="flex items-center text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <FaCalendarAlt className="mr-2" /> Events
            </Link>
            <Link to="/announcements" className="flex items-center text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <FaBullhorn className="mr-2" /> Announcements
            </Link>
            <Link to="/library" className="flex items-center text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <FaBook className="mr-2" /> Library
            </Link>
          </div>

          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="mr-4 text-gray-600 dark:text-gray-200">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center text-gray-600 dark:text-gray-200 focus:outline-none"
              >
                <FaUser className="mr-2" />
                <span className="mx-1">Jane Doe</span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 dark:bg-gray-700">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <FaUser className="mr-2" /> Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
