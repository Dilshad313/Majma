import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prayer from './pages/Prayer';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <SideBar />

          {/* Page Content */}
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prayer-times" element={<Prayer />} />
              <Route path="/events" element={<Events />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
