// Express file
const express = require("express");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4040);

// Middlewares

// Global Middlewares

// Routes
app.use(require("./routes/course.routes"));

// Static files

module.exports = app;
