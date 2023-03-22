// const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
// const fileUpload = require('express-fileupload');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const flash = require('connect-flash');
// const bodyParser = require("body-parser");
// const { adminAuth, userAuth } = require("./server/middleware/auth.js");


// const app = express();
// const port = process.env.PORT || 3000;

// require('dotenv').config();

// app.use(express.json())
// app.use(express.urlencoded( { extended: true } ));
// app.use(express.static('public'));
// app.use(expressLayouts);

// app.use(cookieParser('CookingBlogSecure'));
// app.use(session({
//   secret: 'CookingBlogSecretSession',
//   saveUninitialized: true,
//   resave: true
// }));
// app.use(flash());
// app.use(fileUpload());

// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

// const routes = require('./server/routes/recipeRoutes.js')
// app.use('/', routes);

// // const authRoutes= require('./server/routes/recipeRoutes.js')
// // app.use('/', authRoutes);

// // Routes
// app.use("/api/auth", require("./server/Auth/route"));

// app.get("/", (req, res) => res.render("home"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));
// app.get("/logout", (req, res) => {
//   res.cookie("jwt", "", { maxAge: "1" });
//   res.redirect("/");
// });
// app.get("/admin", adminAuth, (req, res) => res.render("admin"));
// app.get("/basic", userAuth, (req, res) => res.render("user"));

// app.listen(port, ()=> console.log(`Listening to port ${port}`));


// process.on("unhandledRejection", (err) => {
//   console.log(`An error occurred: ${err.message}`);
//   server.close(() => process.exit(1));
// });

// const express = require("express");
// const connectDB = require("./db");
// const app = express();
// const cookieParser = require("cookie-parser");
// const { adminAuth, userAuth } = require("./middleware/auth.js");

// const PORT = 4000;

// app.set("view engine", "ejs");

// connectDB();

// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/api/auth", require("./Auth/route"));

// app.get("/", (req, res) => res.render("home"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));
// app.get("/logout", (req, res) => {
//   res.cookie("jwt", "", { maxAge: "1" });
//   res.redirect("/");
// });
// app.get("/admin", adminAuth, (req, res) => res.render("admin"));
// app.get("/basic", userAuth, (req, res) => res.render("user"));

// const server = app.listen(PORT, () =>
//   console.log(`Server Connected to port ${PORT}`)
// );

// process.on("unhandledRejection", (err) => {
//   console.log(`An error occurred: ${err.message}`);
//   server.close(() => process.exit(1));
// });

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require("body-parser");
// const { adminAuth, userAuth } = require("./middleware/auth.js");
const connectDB = require("./db");

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

const authRoutes= require('./server/routes/authRoutes.js')
app.use('/', authRoutes);
connectDB();
// Routes
app.use("/api/auth", require("./Auth/route"));

// app.get("/", (req, res) => res.render("home"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
// app.get("/admin", adminAuth, (req, res) => res.render("admin"));
// app.get("/basic", userAuth, (req, res) => res.render("user"));

app.listen(port, ()=> console.log(`Listening to port ${port}`));

app.use(express.json());
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
