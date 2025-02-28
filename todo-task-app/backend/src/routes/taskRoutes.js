const express = require("express");
const {
  createTask,
  getRecentTasks,
  markAsCompleted,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getRecentTasks);
router.put("/tasks/:id/done", markAsCompleted);

module.exports = router;
