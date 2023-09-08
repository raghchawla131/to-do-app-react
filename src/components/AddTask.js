import React from "react";

export default function AddTask({ tasks, setTasks }) {

  function deleteTask(e, id) {
    e.preventDefault();
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleCheckbox(id) {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, checked: !task.checked} : task
      )
    );
  }

  return (
    <>
      <ul id="tasks-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input checked={task.checked} onChange={() => handleCheckbox(task.id)} id="checkbox" type="checkbox" />
              {task.task}
            </div>
            <button
              onClick={(e) => {
                deleteTask(e, task.id);
              }}
              id="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
