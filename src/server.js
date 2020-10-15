// Express file
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");


// Initializations
const app = express();


// Settings
app.set("port", process.env.PORT || 4040);


// Middlewares

// Global Middlewares

// Routes

// Static files


module.exports = app;