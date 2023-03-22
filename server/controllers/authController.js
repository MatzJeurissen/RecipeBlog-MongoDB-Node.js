// require('../models/database');
const User = require('../models/User');

exports.about = async(req, res) => {
    try {
      res.render("home");
    } catch (error) {
      res.status(500).send({message: error.message || "Error Occured" });
    }
  }

exports.register = async(req, res) => {
    try {
        res.render("register");
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
    }
}

exports.login = async(req, res) => {
    try {
        res.render("login");
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
    }
}

exports.logout = async(req, res) => {
    try {
        (req, res) => {
            res.cookie("jwt", "", { maxAge: "1" });
            res.redirect("/");
        };
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
    }
}

exports.admin = async(req, res) => {
    try {
        const limitNumber = 5;
        const users = await User.find({}).limit(limitNumber);
        res.render("admin", {users});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
    }
}

// exports.getUsers = async (req, res, next) => {
//     await User.find({})
//       .then((users) => {
//         const userFunction = users.map((user) => {
//           const container = {};
//           container.username = user.username;
//           container.role = user.role;
//           container.id = user._id;
  
//           return container;
//         });
//         res.status(200).json({ user: userFunction });
//       })
//       .catch((err) =>
//         res.status(401).json({ message: "Not successful", error: err.message })
//       );
//   };


exports.basic = async(req, res) => {
    try {
        res.render("basic");
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
    }
}
