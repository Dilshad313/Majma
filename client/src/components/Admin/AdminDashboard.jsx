import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserPlusIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/admin/dashboard/add-employee" className="flex items-center px-4 py-3 hover:bg-gray-700 transition duration-300">
                <UserPlusIcon className="h-6 w-6 mr-3" />
                <span>Add Employee</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/add-event" className="flex items-center px-4 py-3 hover:bg-gray-700 transition duration-300">
                <CalendarDaysIcon className="h-6 w-6 mr-3" />
                <span>Add Event</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/user-list" className="flex items-center px-4 py-3 hover:bg-gray-700 transition duration-300">
                <UsersIcon className="h-6 w-6 mr-3" />
                <span>User List</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
