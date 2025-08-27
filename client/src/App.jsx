import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './components/Dashboard/Profile';
import MyEvents from './components/Dashboard/MyEvents';
import MyClasses from './components/Dashboard/MyClasses';
import MyDonations from './components/Dashboard/MyDonations';
import Announcements from './components/Dashboard/Announcements';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <Router>
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="events" element={<MyEvents />} />
                    <Route path="classes" element={<MyClasses />} />
                    <Route path="donations" element={<MyDonations />} />
                    <Route path="announcements" element={<Announcements />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
