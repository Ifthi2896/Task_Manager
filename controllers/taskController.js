const taskModel = require("../models/taskModel");

// Get All Tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ error: "Error retrieving tasks from database", message: error.message });
  }
};

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { name, completed } = req.body;
    const task = await taskModel.create({ name, completed });
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ error: "Error creating task", message: error.message });
  }
};

// Get Single Task
exports.getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ error: "Error fetching task", message: error.message });
  }
};

// Update Single Task
exports.updateSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, completed } = req.body;

    // Find the task and update it
    const task = await taskModel.findByIdAndUpdate(id, { name, completed }, { new: true });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ error: "Error updating task", message: error.message });
  }
};

// Delete Single Task
exports.deleteSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting task", message: error.message });
  }
};
