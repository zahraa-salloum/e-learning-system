const Class = require("../models/classModel.js");
const User = require("../models/userModel.js");
const Withdrawal = require("../models/withdrawalModel.js");
const Document = require("../models/documentModel.js");



exports.getAllStudents = async (req, res) => {
    const students = await User.find({ role: "student" });
  
    res.json(students)
  }

  exports.getAllClasses = async (req, res) => {
    const classes = await Class.find({}, { students: 0 });
  
    res.json(classes)
  }
  
  exports.getClassesOfStudent = async (req, res) => {
    const { id: studentId } = req.params;
    const classes = await Class.find({ students: studentId }, { students: 0 })
  
    res.json(classes)
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
    { $push: { students: studentId } },
    { new: true }
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

exports.getWithdrawals = async (req, res) => {


  try {
    const withdrawals = await Withdrawal.find({ status: "pending" }).populate("student","name").populate("class","name");
    res.json(withdrawals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.updateStatusWithdrawal = async (req, res) => {
  const { id: withdrawalId } = req.params;
  const { status } = req.body;

  const updatedWithdrawal = await Withdrawal.findByIdAndUpdate(
    withdrawalId,
     { status: status },
     { new: true }
  );
  if(status == "accepted"){
   
    const deleting_student = await Class.findOneAndUpdate(
      { _id: updatedWithdrawal.class },
      { $pull: { students: { $in: [updatedWithdrawal.student] } } },
      { new: true }
    );
  }
    
  res.json(updatedWithdrawal);
};


exports.getFilesByClass = async (req, res) => {
  const { classId } = req.body;

  const files = await Document.find({ class: classId });

  res.json(files);
}

exports.getClassStudents = async (req, res) => {
    const { id } = req.params;
  
    const students = await Class.findById(id).populate("students","name email")
    res.json(students);
  }

