const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/financeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema
const UserSchema = new mongoose.Schema({
  email: String,
  phone: String,
  name: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Define Expense Schema
const ExpenseSchema = new mongoose.Schema({
  date: String,
  title: String,
  category: String,
  amount: Number,
});
const Expense = mongoose.model("Expense", ExpenseSchema);

// User Registration API
app.post("/api/register", async (req, res) => {
  const { email, phone, name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ email, phone, name, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Add Expense API
app.post("/api/expenses", async (req, res) => {
  const { date, title, category, amount } = req.body;

  try {
    const newExpense = new Expense({ date, title, category, amount });
    await newExpense.save();
    res.json({ message: "Expense added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding expense" });
  }
});

// Start Server on Port 5001
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
