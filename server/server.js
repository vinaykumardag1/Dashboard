const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/authRoutes");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Dashboard")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
