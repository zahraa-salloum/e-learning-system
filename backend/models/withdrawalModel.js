const mongoose = require("mongoose");
const User = require("./userModel");
const Class = require("./classModel");

const withdrawalSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "accepted","rejected"],
    default: "pending",
  },

})
const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);
module.exports = Withdrawal