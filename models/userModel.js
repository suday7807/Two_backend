const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Pease enter the details"],
    },
    password: {
      type: String,
      required: [true, "Pease enter the details"],
    },
    email: {
      type: String,
      required: [true, "Pease enter the  email"],
      unique: [true, "This is already taken "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema)