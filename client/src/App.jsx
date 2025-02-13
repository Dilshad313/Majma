import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
