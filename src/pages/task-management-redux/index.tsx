import { Task } from "@/hooks/useTaskList";
import { addTask, toggleTaskCompletion, deleteTask } from "@/redux/tasksSlice";
import { RootState, store, persistor } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
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
import SectionTitle from "@/components/section-title";

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

  // BUGS EXAMPLES
  // const handleAddTask = (taskName: string) => {
  //   if (taskName.trim() !== "") {
  //     // Not dispatching the action correctly
  //     dispatch({ type: "addTask", payload: taskName });
  //   }
  // };

  // // Not passing the tasks dependency to useEffect
  // useEffect(() => {
  //   document.title = `TM App (${tasks.length} tasks)`;
  // }, []);

  // // Using useState inside a conditional statement
  // if (tasks.length > 0) {
  //   const [count, setCount] = useState(0);
  // }

  return (
    <>
      <SectionTitle title={"TM with redux"}></SectionTitle>

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
                <h6>Details</h6> <ArrowRight />
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
    </>
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
