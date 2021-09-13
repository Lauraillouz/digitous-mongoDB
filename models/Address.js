const mongoose = require("mongoose");

const AddresSchema = mongoose.model({
  ID: {
    type: mongoose.Types.ObjectId,
  },
  streetName: String,
  streetNumber: String,
  postCode: String,
  city: String,
});
