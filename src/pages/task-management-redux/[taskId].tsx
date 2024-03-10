import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import SectionTitle from "@/components/section-title";

function TaskDetailsById() {
  const router = useRouter();
  const { taskId } = router.query;

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const task = tasks.find((task) => task.id === parseInt(taskId as string, 10));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <>
      <SectionTitle title={"TM with redux"}></SectionTitle>

      <div className="flex justify-between">
        <h3>Task {task.id} Details</h3>
        <IconButton onClick={() => router.push("/task-management-redux")}>
          <Close />
        </IconButton>
      </div>

      <p>Task ID: {task.id}</p>
      <p>Name: {task.name}</p>
      <p>Completed: {task.completed ? "Yes" : "No"} </p>
    </>
  );
}

function TaskDetailsPage() {
  return (
    <>
      <Provider store={store}>
        <TaskDetailsById />
      </Provider>
    </>
  );
}

export default TaskDetailsPage;
