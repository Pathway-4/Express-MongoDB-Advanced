"use strict";

const express = require("express");
const { getUser, createUser, deleteUser, updateUser } = require("./controller");
const auth = require("./middleware/auth");
const role = require("./middleware/roles");
const login = require("./middleware/login");
const register = require("./middleware/register");

const router = express.Router;

router.route("/").get(function (req, res, next) {
  res.status(200).json({ message: "Server is online." });
});

router.route("/user").get(getUser);
// router.route("/user").post((req, res, next) => {
//   res.status(201).post({ message: "Users created." });
// });
router.route("/user/").post(createUser);
router.route("/user/:id").delete(auth, role("admin"), deleteUser);
router.route("/user:/id").put(updateUser);

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
