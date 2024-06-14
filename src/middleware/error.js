"use strict";

function errorHandling(err, req, res, next) {
  res.status(500).json({
    message: err.message,
  });
}

function notFound(req, res, next) {
  res.status(404).json({
    message: "Not found",
  });
}

module.exports = { errorHandling, notFound };
