import useTaskList from "@/hooks/useTaskList";
import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskManagement() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskList();

  const [taskName, setTaskName] = useState("");

  return (
    <div>
      <div className="flex justify-between">
        <TextField
          style={{ width: "90%", marginRight: "5%" }}
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <Button
          variant="outlined"
          onClick={() => {
            addTask(taskName);
            setTaskName("");
          }}
          disabled={taskName.trim() === ""}
        >
          Create
        </Button>
      </div>

      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <ListItemText primary={task.name} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => deleteTask(task.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TaskManagement;
