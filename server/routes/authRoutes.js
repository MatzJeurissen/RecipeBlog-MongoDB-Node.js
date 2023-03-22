// routes/userRoutes.js
const express = require('express');
const { adminAuth, userAuth } = require('../../middleware/auth');
const router = express.Router();
const authController = require('../controllers/authController');
/**
 * App Routes 
*/
router.get('/about"', authController.about);
router.get('/register', authController.register);
router.get('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/admin', adminAuth, authController.admin);
router.get('/basic', userAuth, authController.basic);
router.get('/basic', userAuth, authController.basic);




// app.get("/about", (req, res) => res.render("home"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));
// app.get("/logout", (req, res) => {
//   res.cookie("jwt", "", { maxAge: "1" });
//   res.redirect("/");
// });
// app.get("/admin", adminAuth, (req, res) => res.render("admin"));
// app.get("/basic", userAuth, (req, res) => res.render("user"));

 
module.exports = router;