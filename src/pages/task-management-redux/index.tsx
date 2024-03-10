import { Task } from "@/hooks/useTaskList";
import { addTask, toggleTaskCompletion, deleteTask } from "@/redux/tasksSlice";
import {
  TextField,
  Button,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import store, { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { ArrowRight, KeyboardArrowDown } from "@mui/icons-material";

function TaskManagementRedux() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const router = useRouter();

  return (
    <div>
      <h1>USING REDUX</h1>
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
            dispatch(addTask(taskName));
            setTaskName("");
          }}
          disabled={taskName.trim() === ""}
        >
          Create
        </Button>
      </div>

      <List>
        {tasks.map((task: Task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(task.id))}
            />

            <ListItemText primary={task.name} />

            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  router.push({
                    pathname: "/task-management-redux/[pid]",
                    query: { pid: task.id },
                  });
                }}
              >
                <ArrowRight></ArrowRight>
              </IconButton>
              <IconButton
                onClick={() => dispatch(deleteTask(task.id))}
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

function TaskManagementReduxPage() {
  return (
    <>
      <Provider store={store}>
        <TaskManagementRedux></TaskManagementRedux>
      </Provider>
    </>
  );
}

export default TaskManagementReduxPage;
