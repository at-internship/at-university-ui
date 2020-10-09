// Express file
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");
// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(  
    ".hbs",  
    exphbs({    
        defaultLayout: "main",    
        layoutsDir: path.join(app.get("views"), "layouts"),    
        partialsDir: path.join(app.get("views"), "partials"),    
        extname: ".hbs",  }));
app.set("view engine", ".hbs");
// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// Global Middlewares

// Routes
app.use(require("./routes/test.routes"));
app.use(require("./routes/course.routes"));
app.use(require("./routes/admin.routes"));

// Static files

module.exports = app;
