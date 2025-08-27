require('dotenv').config(); // Load env variables at the top

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();

// Connect to Database
connectDB();

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

// Routes
app.use('/api/announcements', require('./routes/announcementRoutes'));
app.use('/api/classes', require('./routes/classRoutes'));
app.use('/api/community', require('./routes/communityRoutes'));
app.use('/api/donations', require('./routes/donationRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/library', require('./routes/libraryRoutes'));
app.use('/api/prayerTimes', require('./routes/prayerTimesRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});