"use strict";

function role(requiredRole) {
  return (req, res, next) => {
    if (req.user.user.role === "admin") {
      next();
    }
    if (req.user.user.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}

module.exports = role;
