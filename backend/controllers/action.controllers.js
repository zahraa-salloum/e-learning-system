const Class = require("../models/classModel.js");
const User = require("../models/userModel.js");
const Withdrawal = require("../models/withdrawalModel.js");
const Document = require("../models/documentModel.js");



exports.getAllStudents = async (req, res) => {
    const students = await User.find();
  
    res.json(students)
  }
  
exports.createClass = async (req, res) => {
    const { name, major, credits,semester} = req.body;
  
    try {
      const class_new = await Class.create({ name, major, credits, semester });
      res.json(class_new);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }


