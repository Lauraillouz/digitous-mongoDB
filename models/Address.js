const mongoose = require("mongoose");

const AddresSchema = mongoose.Schema({
  ID: {
    type: mongoose.Types.ObjectId,
  },
  streetName: String,
  streetNumber: String,
  postCode: String,
  city: String,
});

const Address = mongoose.model("Address", AddresSchema);

module.exports = Address