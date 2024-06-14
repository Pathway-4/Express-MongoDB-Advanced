"use strict";

const User = require("./models");


function Home(req, res, next) {
  res.status(200).json({ message: "Server is online." });
}

async function createUser(req, res, next) {
  try {
    const { name, email, password, age, isActive, role } = req.body;
    const User = new User({ name, email, age, isActive });
    await User.save();
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getUser(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deactivate(req, res, next) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    user.isActive = false;
    await user.save();
    res.status(200).json({ message: "User deactivated successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { name, email, age, isActive } = req.body;
    const user = await User.findByIdAndUpdate(id);
    user.name = name;
    user.email = email;
    user.age = age;
    user.isActive = isActive;
    await user.save();
    res.status(201).json({ message: "User updated successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Error message functions

module.exports = {
  createUser,
  getUser,
  deactivate,
  deleteUser,
  updateUser,
};
