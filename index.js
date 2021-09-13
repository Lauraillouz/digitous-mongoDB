const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  });

// Global middlewares
app.use(express.json());
app.use(morgan("tiny"));

// Listening on Port
app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
