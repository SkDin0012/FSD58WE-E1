const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
connectDB();
app.use(bodyParser.json());
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

module.exports = app;
