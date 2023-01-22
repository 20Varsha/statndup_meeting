const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  is_active: {
    type: Boolean,
    default:true
  },
});

module.exports = mongoose.model("User", User);
