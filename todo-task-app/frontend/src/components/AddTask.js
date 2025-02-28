import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    if (!title || !description) return;
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });
      onTaskAdded(response.data);
      setTitle("");
      setDescription("");
      alert("Task added successfully");
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add a Task
      </Typography>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
};

export default AddTask;
