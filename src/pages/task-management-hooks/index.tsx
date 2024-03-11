import useTaskList from "@/hooks/useTaskList";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskInput from "@/components/task-input";
import { useRouter } from "next/router";
import SectionTitle from "@/components/section-title";

function TaskManagement() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskList();

  const handleAddTask = (taskName: string) => {
    if (taskName.trim() !== "") {
      addTask(taskName);
    }
  };

  const router = useRouter();

  return (
    <>
      <SectionTitle title={"TM with hooks"}></SectionTitle>

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
    </>
  );
}

export default TaskManagement;
