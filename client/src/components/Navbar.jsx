import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold ml-10">
          <Link to="/" className="hover:text-blue-400 transition duration-300 ml-10">
            Majma
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/prayer-times" className="hover:text-blue-400 transition duration-300">Prayer Times</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-blue-400 transition duration-300">Events</Link>
          </li>
          <li>
            <Link to="/donations" className="hover:text-blue-400 transition duration-300">Donations</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
          </li>
          {/* Search Box */}
          <li className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              onClick={handleSearch}
              className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-blue-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-gray-700 text-white py-4 space-y-4 text-center">
          <li>
            <Link to="/" className="block hover:text-blue-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/prayer-times" className="block hover:text-blue-400 transition duration-300">Prayer Times</Link>
          </li>
          <li>
            <Link to="/events" className="block hover:text-blue-400 transition duration-300">Events</Link>
          </li>
          <li>
            <Link to="/donations" className="block hover:text-blue-400 transition duration-300">Donations</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-blue-400 transition duration-300">Contact</Link>
          </li>
          <li className="flex justify-center items-center space-x-2 px-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              onClick={handleSearch}
              className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
            >
              Search
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
