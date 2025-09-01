import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../../components/Admin/AdminDashboard';
import AddEmployee from '../../components/Admin/AddEmployee';
import UserList from '../../components/Admin/UserList';
import AddEvent from '../../components/Admin/AddEvent';

const AdminDashboardPage = () => {
  return (
    <AdminDashboard />
    
  );
};

export default AdminDashboardPage;