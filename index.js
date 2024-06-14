"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3006;
const DB = process.env.DB;
const mongoose = require("mongoose");
const { notFound, errorHandling } = require("./src/middleware/error");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://user-1:3z2Lkto2cm9joc9X@cluster0.ot49d9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(notFound);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
