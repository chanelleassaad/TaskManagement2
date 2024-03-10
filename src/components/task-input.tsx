import { useState } from "react";
import { Button, TextField } from "@mui/material";

interface TaskInputProps {
  onCreate: (taskName: string) => void;
}

function TaskInput({ onCreate }: TaskInputProps) {
  const [taskName, setTaskName] = useState("");

  const handleCreate = () => {
    if (taskName.trim() !== "") {
      onCreate(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="flex justify-between">
      <TextField
        style={{ width: "90%", marginRight: "5%" }}
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <Button
        variant="outlined"
        onClick={handleCreate}
        disabled={taskName.trim() === ""}
      >
        Create
      </Button>
    </div>
  );
}

export default TaskInput;
