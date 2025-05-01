
const express = require("express");
const cors = require("cors")
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ CORS Setup (Allow requests from frontend)
app.use(cors());

// JSON middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
