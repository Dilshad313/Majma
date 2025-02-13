require('dotenv').config(); // Load env variables at the top

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();

// Security Middleware
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
connectDB(); // Call the connectDB function

// Route Imports
const userRoutes = require('./routes/userRoutes');
const prayerTimesRoutes = require('./routes/prayerTimesRoutes');
const donationRoutes = require('./routes/donationRoutes');
const eventRoutes = require('./routes/eventRoutes');
const classRoutes = require('./routes/classRoutes');
const communityRoutes = require('./routes/communityRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const libraryRoutes = require('./routes/libraryRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/prayer-times', prayerTimesRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/library', libraryRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = server;
