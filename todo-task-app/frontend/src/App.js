import React, { useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <AddTask onTaskAdded={handleTaskAdded} />
          </Grid>
          <Grid item xs={12} md={7}>
            <TaskList key={refresh} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
