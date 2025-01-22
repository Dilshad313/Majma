import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/signup', formData);
      setMessage(res.data.message);
      if (res.data.success) {
        toast.success('Signup successful!');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Signup failed');
      setMessage('Signup failed');
    }
  };

  return (
    <div className="h-100 w-100 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Signup</h2>
        {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-3 focus:ring-rose-500 focus:border-rose-500 shadow-md focus:shadow-xl transition"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-3 focus:ring-rose-500 focus:border-rose-500 shadow-md focus:shadow-xl transition"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-3 focus:ring-rose-500 focus:border-rose-500 shadow-md focus:shadow-xl transition"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-10 text-gray-500 cursor-pointer"
          >
            {passwordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75L20.25 4.5m-5.25 5.25L9 20.25M21 15.75l-7.5-7.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-2.95 0-5.364 1.48-6.729 3.719M12 12c2.95 0 5.364-1.48 6.729-3.719M12 12c0-2.95 1.48-5.364 3.719-6.729M12 12c0 2.95-1.48 5.364-3.719 6.729" />
              </svg>
            )}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Signup
        </button>

        {/* Login Link */}
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
