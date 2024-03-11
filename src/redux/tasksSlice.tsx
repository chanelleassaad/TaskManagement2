import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
    { id: 3, name: "Task 3", completed: false },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id:
          state.tasks.length > 0
            ? state.tasks[state.tasks.length - 1].id + 1
            : 1,
        name: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
