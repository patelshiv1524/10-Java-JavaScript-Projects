const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
