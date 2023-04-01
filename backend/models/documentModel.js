const mongoose = require("mongoose");
const Class = require("./classModel");

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },

})
const Document = mongoose.model("Document", documentSchema);
module.exports = Document