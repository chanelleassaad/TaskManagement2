import { Task } from "@/hooks/useTaskList";
import { addTask, toggleTaskCompletion, deleteTask } from "@/redux/tasksSlice";
import { RootState, store, persistor } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
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
import { useRouter } from "next/router";
import { ArrowRight, Delete } from "@mui/icons-material";
import TaskInput from "@/components/task-input";

function TaskManagementRedux() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAddTask = (taskName: string) => {
    if (taskName.trim() !== "") {
      dispatch(addTask(taskName));
    }
  };

  useEffect(() => {
    document.title = `TM App (${tasks.length} tasks)`;
  }, [tasks]);

  return (
    <div>
      <h1>USING REDUX</h1>

      <TaskInput onCreate={handleAddTask}></TaskInput>

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
                  router.push(`/task-management-redux/${task.id}`);
                }}
              >
                <ArrowRight />
              </IconButton>
              <IconButton
                onClick={() => dispatch(deleteTask(task.id))}
                edge="end"
                aria-label="delete"
              >
                <Delete />
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskManagementRedux />
      </PersistGate>
    </Provider>
  );
}

export default TaskManagementReduxPage;
