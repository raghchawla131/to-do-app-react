import { useState } from "react";
import React from "react";
import AddTask from "./AddTask";

export default function ToDoForm() {
  const[task, setTask] = useState("");
  const[tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();
    if(task === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      task: task,
      checked: false,
    }
    setTasks([...tasks, newTask]);
    setTask("");
  }

  return (
    <>
      <form>
        <label htmlFor="input-task">Task</label>
        <input 
          id="input-task" 
          type="text" placeholder="Task" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} id="add-task-btn">Add Task</button>
      </form>
      <AddTask tasks={tasks} setTasks={setTasks} />
    </>
  );
}
