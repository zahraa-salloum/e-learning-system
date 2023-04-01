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


exports.enroll = async (req, res) => {
  const { id: classId } = req.params;
  const { studentId } = req.body;

  const updatedClass = await Class.findByIdAndUpdate(
    classId,
    { $push: { students: studentId } }
  );

  res.json(updatedClass);
};

exports.uploadFiles = async (req, res) => {
  const { id: classId } = req.params;
  const { title, content} = req.body;

  try {
    const document = await Document.create({ title, content,class: classId });
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.applyWithdrawal = async (req, res) => {
  const { id: studentId } = req.params;
  const { classId } = req.body;

  try {
    const withdrawal = await Withdrawal.create({ student: studentId,class: classId });
    res.json(withdrawal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}


exports.getFilesByClass = async (req, res) => {
  const { classId } = req.body;

  const files = await Document.find({ class: classId });

  res.json(files);
}

