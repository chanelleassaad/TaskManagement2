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
import TaskInput from "@/components/task-input";

function TaskManagement() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskList();

  const handleAddTask = (taskName: string) => {
    if (taskName.trim() !== "") {
      addTask(taskName);
    }
  };

  return (
    <div>
      <h1>USING HOOKS</h1>
      <TaskInput onCreate={handleAddTask}></TaskInput>

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

      <a href={"/task-management-redux"}>
        {" "}
        Click here to see tasks done with Redux{" "}
      </a>
    </div>
  );
}

export default TaskManagement;
