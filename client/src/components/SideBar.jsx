import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white h-full transition-all duration-300 fixed md:relative z-20`}
    >
      <div className="flex items-center justify-between p-4">
        {/* Title */}
        <h2
          className={`text-2xl font-bold transition-all duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          Majma
        </h2>
        {/* Toggle Button */}
        <button
          className="text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <ul className="mt-6">
        <li>
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="text-xl">{isSidebarOpen ? "🏠" : "🏠"}</span>
            <span
              className={`ml-3 transition-all duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/prayer-times"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="text-xl">{isSidebarOpen ? "🕋" : "🕋"}</span>
            <span
              className={`ml-3 transition-all duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Prayer Times
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="text-xl">{isSidebarOpen ? "🎉" : "🎉"}</span>
            <span
              className={`ml-3 transition-all duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Events
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/donations"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="text-xl">{isSidebarOpen ? "💰" : "💰"}</span>
            <span
              className={`ml-3 transition-all duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Donations
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="text-xl">{isSidebarOpen ? "📞" : "📞"}</span>
            <span
              className={`ml-3 transition-all duration-300 ${
                isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
