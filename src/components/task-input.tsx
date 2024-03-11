import React from "react";
import { Button, TextField } from "@mui/material";

interface TaskInputProps {
  onCreate: (taskName: string) => void;
}

class TaskInput extends React.Component<TaskInputProps, { taskName: string }> {
  constructor(props: TaskInputProps) {
    console.log("onMount");

    super(props);
    this.state = {
      taskName: "",
    };
  }

  componentDidMount(): void {
    console.log("didMount");
  }
  componentDidUpdate(
    prevProps: Readonly<TaskInputProps>,
    prevState: Readonly<{ taskName: string }>,
    snapshot?: any
  ): void {
    console.log(prevProps, prevState, "did update");
  }
  componentWillUnmount(): void {
    console.log("unmount");
  }

  handleCreate = () => {
    if (this.state.taskName.trim() !== "") {
      this.props.onCreate(this.state.taskName);
      this.setState({ taskName: "" });
    }
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  };

  render() {
    return (
      <div className="flex justify-between">
        <TextField
          style={{ width: "90%", marginRight: "5%" }}
          label="Task Name"
          value={this.state.taskName}
          onChange={this.handleInputChange}
        />

        <Button
          variant="outlined"
          onClick={this.handleCreate}
          disabled={this.state.taskName.trim() === ""}
        >
          Create
        </Button>
      </div>
    );
  }
}

export default TaskInput;
