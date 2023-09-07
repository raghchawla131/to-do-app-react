import React from "react";

export default function AddTask({ tasks, setTasks }) {
  function deleteTask(e, id) {
    e.preventDefault();
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <ul id="tasks-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <input id="checkbox" type="checkbox" />
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
