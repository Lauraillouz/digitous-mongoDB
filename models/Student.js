const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  ID: {
    type: mongoose.Types.ObjectId,
  },
  firstName: String,
  surname: String,
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
