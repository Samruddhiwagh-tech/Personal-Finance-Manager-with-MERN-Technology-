const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/personal_finance";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB successfully!"))
.catch(err => console.error("❌ MongoDB connection error:", err));

module.exports = mongoose;
