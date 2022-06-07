const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    pincode: { type: Number, required: true },
    State: { type: String, required: true },
    DOB: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("candidate", candidateSchema);
