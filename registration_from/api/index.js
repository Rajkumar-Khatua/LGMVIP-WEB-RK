// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Initialize dotenv
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_connection_url' with your actual MongoDB URL)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for your data (e.g., User)
const userSchema = new mongoose.Schema({
  name: String,
  image: String,
  website: String,
  gender: String,
  skills: [String],
});

const User = mongoose.model("User", userSchema);

// Create an API endpoint to handle POST requests for user registration
app.post("/api/users", async (req, res) => {
  try {
    const { name, image, website, gender, skills } = req.body;

    const newUser = new User({
      name,
      image,
      website,
      gender,
      skills,
    });

    await newUser.save();

    res.status(201).json({ message: "User registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define a GET API route to retrieve users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from MongoDB
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define a DELETE API route to remove a user by ID
app.delete("/api/users/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Use Mongoose to find and delete the user by ID
    await User.findByIdAndRemove(userId);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
