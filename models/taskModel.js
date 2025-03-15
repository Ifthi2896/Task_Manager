const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide Name"], // Ensures the 'name' field is required
    trim: true, // Trims any extra spaces from the start and end
  },
  completed: {
    type: Boolean,
    default: false, // Default value for 'completed' is false
  },
});

// Model with collection name explicitly set to 'task'
module.exports = mongoose.model("tasks", taskSchema, "task");
