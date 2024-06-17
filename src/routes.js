"use strict";

const express = require("express");
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  home,
} = require("./controller");
const auth = require("./middleware/auth");
const role = require("./middleware/roles");
const login = require("./middleware/login");
const register = require("./middleware/register");

const router = express.Router();

router.route("/").get(home);

router.route("/user").get(getUser);

router.route("/user/").post(createUser);
router.route("/user/:id").delete(auth, role(["user", "admin"]), deleteUser);
router.route("/user:/id").put(updateUser);

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
