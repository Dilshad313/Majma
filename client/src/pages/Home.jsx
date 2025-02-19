import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Majma</h1>
        <p className="text-lg mb-4 text-center">Your one-stop solution for managing mosque activities.</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Login</Link>
          <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Signup</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Announcements</h2>
          <p className="mb-4">Stay updated with the latest announcements from the mosque.</p>
          <Link to="/announcements" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Books</h2>
          <p className="mb-4">Explore our collection of religious books and resources.</p>
          <Link to="/books" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Classes</h2>
          <p className="mb-4">Join our educational classes and enhance your knowledge.</p>
          <Link to="/classes" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Donations</h2>
          <p className="mb-4">Support the mosque by making a donation.</p>
          <Link to="/donations" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Events</h2>
          <p className="mb-4">Participate in upcoming events and activities.</p>
          <Link to="/events" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Prayer Times</h2>
          <p className="mb-4">Check the daily prayer times for the mosque.</p>
          <Link to="/prayer-times" className="text-blue-500 hover:underline">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;