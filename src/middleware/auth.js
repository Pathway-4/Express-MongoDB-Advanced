"use strict";

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = auth;
