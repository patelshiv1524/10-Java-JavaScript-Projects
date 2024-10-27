// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to the database
connectDB();
