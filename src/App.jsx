import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './layouts/MainLayout';
import PrayerTimes from './pages/PrayerTimes';
import Announcements from './pages/Announcements';
import Events from './pages/Events';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Authenticated routes */}
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/prayer-times" element={<PrayerTimes />} />
                    <Route path="/announcements" element={<Announcements />} />
                    <Route path="/events" element={<Events />} />
                    {/* Add other authenticated routes here as they are created */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
