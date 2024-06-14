"use strict";

const User = require("../models");

async function register(req, res, next) {
  try {
    const { name, email, password, age, isActive } = req.body;
    const user = new User({ name, email, password, age, isActive });
    await user.save();
    res.status(200).json({ message: "user created." });
  } catch (error) {
    next(error);
  }
}

module.exports = register;
