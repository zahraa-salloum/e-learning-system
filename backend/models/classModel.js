const mongoose = require("mongoose");
const User = require("./userModel");



const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  credits: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: "no students yet"
  }]
  
})


const Class = mongoose.model("Class", classSchema);
module.exports = Class



