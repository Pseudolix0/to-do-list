import Form from "./components/Form";
import { useState } from "react";
import Input from "./components/input";

function App(props) {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task, index) => index !== 0);
    // if(index == 1){
    //   tasks.filter((task, index) => 1 !== 0);
    // }
    console.log("pediu");
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <h1 style={{textAlign:"center",color:"#1976d2"}}>To-do list</h1>
      </div>

      <div
        style={{
          border: "2px solid #1976d2",
          maxWidth: "30%",
          height: "100%",
          minHeight: "500px",
          margin: "50px auto",
          borderRadius: "3em",
        }}
      >
        <Input onAddTask={addTask} />
        {tasks.map((tasks, index) => (
          <Form key={index} todo={tasks} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
