import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Input(props) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!Boolean(task)) return;
    props.onAddTask(task);
    setTask("");
  }; 


  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleAddTask();
    }
  }

  return (
    <div style={{ marginLeft: "27%", marginTop: "10px" }}>
      <TextField
        id="standard-basic"
        label="Tarefa"
        variant="standard"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="outlined"
        style={{ position: "relative", top: "11px" }}
        onClick={handleAddTask}
      >
        Adicionar
      </Button>
    </div>
  );
}
