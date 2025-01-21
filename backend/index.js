const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const prayerRoutes = require('./routes/prayerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const donationRoutes = require('./routes/donationRoutes');
const locationRoutes = require('./routes/locationRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Use Routes
app.use('/api', prayerRoutes);
app.use('/api', eventRoutes);
app.use('/api', donationRoutes);
app.use('/api', locationRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
