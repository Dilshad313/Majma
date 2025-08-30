import React from 'react';
import AdminDashboard from '../../components/Admin/AdminDashboard';
import AddEmployee from '../../components/Admin/AddEmployee';
import UserList from '../../components/Admin/UserList';
import AddEvent from '../../components/Admin/AddEvent';

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminDashboard />
      <AddEmployee />
      <UserList />
      <AddEvent />
    </div>
  );
};

export default AdminDashboardPage;
