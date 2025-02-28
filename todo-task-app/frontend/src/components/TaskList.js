import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  const handleMarkDone = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}/done`);
      setTasks(tasks.filter((task) => task.id !== id));
      alert("Task done successfully")
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      {tasks.map((task) => (
        <Card key={task.id} sx={{ mb: 2, backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {task.title}
            </Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleMarkDone(task.id)}
              sx={{ mt: 1 }}
            >
              Done
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TaskList;
