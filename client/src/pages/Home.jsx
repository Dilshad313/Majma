import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await api.get('/users/profile');
          setUser(res.data);
        } catch (error) {
          console.error('Failed to fetch user profile', error);
          localStorage.removeItem('token');
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/src/assets/images/image1.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Majma</h1>
          <p className="text-lg mb-8">Your one-stop solution for managing mosque activities.</p>
          <div className="flex space-x-4">
            {user ? (
              <div className='flex items-center space-x-4'>
                <p className='text-lg'>Welcome, {user.firstName} {user.lastName}!</p>
                <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300">Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">User Login</Link>
                <Link to="/admin/login" className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300">Admin Login</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Announcements</h3>
              <p>Stay updated with the latest announcements from the mosque.</p>
              <Link to="/announcements" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Books</h3>
              <p>Explore our collection of religious books and resources.</p>
              <Link to="/books" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Classes</h3>
              <p>Join our educational classes and enhance your knowledge.</p>
              <Link to="/classes" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Donations</h3>
              <p>Support the mosque by making a donation.</p>
              <Link to="/donations" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Events</h3>
              <p>Participate in upcoming events and activities.</p>
              <Link to="/events" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Prayer Times</h3>
              <p>Check the daily prayer times for the mosque.</p>
              <Link to="/prayer-times" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8">Become a member and get involved in our activities.</p>
          <Link to="/signup" className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition duration-300">Sign Up Now</Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Majma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;