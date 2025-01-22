const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
