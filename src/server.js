// Express file
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4040);
app.set("views", path.join(__dirname, "views"));
app.engine(  
    ".hbs",  
    exphbs({    
        defaultLayout: "dashboard",    
        layoutsDir: path.join(app.get("views"), "admin"),    
        extname: ".hbs",  }));
app.set("view engine", ".hbs");

// Middlewares

// Global Middlewares

// Routes
app.use(require("./routes/admin.routes"));

// Static files

module.exports = app;