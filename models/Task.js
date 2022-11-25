const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    require: true
  },
  date: {
    type: String,
    require:true
  },
  description: {
    type: String,
    require:true
  }
});

module.exports = mongoose.model("Task", taskSchema)