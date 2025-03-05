const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/MajorProject";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
