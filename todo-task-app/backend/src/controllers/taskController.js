const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await Task.createTask(title, description);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecentTasks = async (req, res) => {
  try {
    const tasks = await Task.getRecentTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAsCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.markAsCompleted(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
