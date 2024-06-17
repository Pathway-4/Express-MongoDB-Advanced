"use strict";

const User = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const token = jwt.sign({ id: user._id, user }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, user });
  } catch (error) {
    next(error);
  }
}

module.exports = login;
