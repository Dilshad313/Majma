import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  // Decode the token to get user role
  const user = JSON.parse(atob(token.split('.')[1]));

  return user.role === 'admin' ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
