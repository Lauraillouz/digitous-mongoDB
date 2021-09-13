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
// Models
const Address = require("./models/Address");
const Student = require("./models/Student");

// Global middlewares
app.use(express.json());
app.use(morgan("tiny"));

// Routes GET
app.get("/student/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findById(studentId).populate("address");
    res.json({
      status: "Ok",
      data: student,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

// Routes POST
app.post("/address", async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.json({
      status: "OK",
      message: "New address has been created",
      data: address,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

app.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({
      status: "OK",
      message: "New student has been created",
      data: student,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
});

// Listening on Port
app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
