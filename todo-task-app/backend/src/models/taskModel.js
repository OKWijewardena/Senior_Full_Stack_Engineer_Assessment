const pool = require("../config/db");

class Task {
  static async createTask(title, description) {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    return result.rows[0];
  }

  static async getRecentTasks() {
    const result = await pool.query(
      "SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5"
    );
    return result.rows;
  }

  static async markAsCompleted(id) {
    await pool.query("UPDATE task SET completed = true WHERE id = $1", [id]);
    return { message: "Task marked as completed" };
  }
}

module.exports = Task;
