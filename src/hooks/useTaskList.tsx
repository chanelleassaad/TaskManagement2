import { useState } from "react";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const useTaskList = () => {
  const initialTasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
    { id: 3, name: "Task 3", completed: true },
    { id: 4, name: "Task 4", completed: true },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (name: any) => {
    const newTask = {
      id: tasks?.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id != taskId));
  };

  return { tasks, addTask, toggleTaskCompletion, deleteTask };
};

export default useTaskList;
