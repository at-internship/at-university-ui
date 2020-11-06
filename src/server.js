// Express file
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const methodOverride = require("method-override");
var session = require('express-session');

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
        extname: ".hbs",

        // Helpers  
        helpers: {
            'checked': function (a, b) {
                if (a == undefined) return '';
                return a == b ? 'checked' : '';
            },
            'selected': function (a, b) {
                if (a == undefined) return '';
                return a == b ? 'selected' : '';
            }
        }
    })
);

app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Global Middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});

// AT-UNIVERSITY Routes - Admin
app.use("/admin", require("./routes/admin.routes"));

// AT-UNIVERSITY Routes - General
app.use("/", require("./routes/at-university.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;