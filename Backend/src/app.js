const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});