import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-700"><Link to="/dashboard/profile">Profile</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="/dashboard/events">My Events</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="/dashboard/classes">My Classes</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="/dashboard/donations">My Donations</Link></li>
            <li className="p-4 hover:bg-gray-700"><Link to="/dashboard/announcements">Announcements</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
